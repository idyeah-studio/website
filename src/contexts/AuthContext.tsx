import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  currentUser: User | null;
  userPaidStatus: boolean;
  loading: boolean;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  checkUserPaidStatus: () => Promise<boolean>;
  updateUserPaidStatus: (status: boolean) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userPaidStatus, setUserPaidStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if user has paid for access
  const checkUserPaidStatus = async (): Promise<boolean> => {
    if (!currentUser) return false;
    
    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const hasPaid = userDoc.data()?.hasPaid || false;
        setUserPaidStatus(hasPaid);
        return hasPaid;
      }
      return false;
    } catch (error) {
      console.error('Error checking paid status:', error);
      return false;
    }
  };

  // Update user's paid status
  const updateUserPaidStatus = async (status: boolean) => {
    if (!currentUser) return;
    
    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      await setDoc(userDocRef, {
        hasPaid: status,
        email: currentUser.email,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      setUserPaidStatus(status);
    } catch (error) {
      console.error('Error updating paid status:', error);
      throw error;
    }
  };

  const signup = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Create user document in Firestore
    const userDocRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userDocRef, {
      email,
      hasPaid: false,
      createdAt: new Date().toISOString()
    });
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    
    // Check if user document exists, if not create it
    const userDocRef = doc(db, 'users', userCredential.user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        email: userCredential.user.email,
        hasPaid: false,
        createdAt: new Date().toISOString()
      });
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUserPaidStatus(false);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        await checkUserPaidStatus();
      } else {
        setUserPaidStatus(false);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    userPaidStatus,
    loading,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    checkUserPaidStatus,
    updateUserPaidStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
