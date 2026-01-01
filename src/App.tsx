import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { Purchase } from './components/Purchase/Purchase';
import { EbookReader } from './components/Ebook/EbookReader';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founderprofile" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/ebook" element={<EbookReader />} />
      </Routes>
    </AuthProvider>
  );
}
