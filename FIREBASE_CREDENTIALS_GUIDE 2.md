# 🔑 Getting Your Firebase Credentials

Follow these steps to get your Firebase configuration and set up your `.env` file.

## Step 1: Get Firebase Configuration

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project

2. **Open Project Settings**
   - Click the **⚙️ gear icon** (top left, next to "Project Overview")
   - Click **"Project settings"**

3. **Scroll Down to "Your Apps"**
   - Scroll down to the section that says **"Your apps"**
   - If you don't see a web app yet, click **"Add app"** and select the **`</>`** (Web) icon
   - Give it a nickname (e.g., "Ebook App")
   - Click **"Register app"**

4. **Copy the Configuration**
   - You'll see a code block like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyC...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   ```
   - **Keep this page open** - you'll need these values in the next step

## Step 2: Create Your `.env` File

I'll create the `.env` file for you now. Just copy the values from Firebase Console and paste them when prompted.

---

## 📋 Your Configuration Values

From the Firebase Console, copy these values:

**apiKey**: `AIzaSy...` (starts with "AIzaSy")
**authDomain**: `your-project.firebaseapp.com`
**projectId**: `your-project-id`
**storageBucket**: `your-project.appspot.com`
**messagingSenderId**: `123456789` (numbers only)
**appId**: `1:123456789:web:abcdef`

---

## ✅ Next Step

Once you have these values copied, I'll help you create the `.env` file with them!
