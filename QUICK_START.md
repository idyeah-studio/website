# ⚡ Quick Start Checklist

Follow these steps to get your ebook platform running in 10 minutes.

## ✅ Step-by-Step Setup

### 1. Firebase Setup (3 minutes)

- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Create new project (or use existing)
- [ ] Enable **Authentication** → Email/Password
- [ ] Enable **Authentication** → Google (optional)
- [ ] Create **Firestore Database** (test mode)
- [ ] Go to Project Settings → Copy config values

### 2. Environment Setup (2 minutes)

- [ ] Copy `.env.example` to `.env`:
  ```bash
  cp .env.example .env
  ```
- [ ] Open `.env` and paste your Firebase credentials:
  ```env
  VITE_FIREBASE_API_KEY=your_api_key_here
  VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  ```

### 3. Firestore Security Rules (1 minute)

- [ ] Go to Firestore → Rules
- [ ] Replace with:
  ```javascript
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /users/{userId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
  ```
- [ ] Click "Publish"

### 4. Run the App (1 minute)

- [ ] Install dependencies (if not done):
  ```bash
  npm install
  ```
- [ ] Start dev server:
  ```bash
  npm run dev
  ```
- [ ] Open browser to `http://localhost:5173`

### 5. Test It Out (3 minutes)

- [ ] Navigate to `/signup`
- [ ] Create a test account
- [ ] Click "Get Instant Access" on purchase page
- [ ] Confirm you see the ebook reader at `/ebook`
- [ ] Navigate through recipes using sidebar
- [ ] Test logout and login again

## 🎉 You're Done!

Your ebook platform is now running with:
- ✅ User authentication
- ✅ Payment page (demo mode)
- ✅ Protected ebook content
- ✅ All 75 recipes loaded

## 🚀 Next Steps

### For Production

1. **Set up Stripe** (see [`EBOOK_SETUP.md`](EBOOK_SETUP.md#step-3-stripe-setup-optional---production-only))
   - Create Stripe account
   - Create product ($49)
   - Add Stripe keys to `.env`
   - Build backend for webhooks

2. **Deploy**
   - Deploy to Vercel/Netlify
   - Set environment variables
   - Update Firebase authorized domains

3. **Go Live!**
   - Test payment flow
   - Monitor Firebase Analytics
   - Track sales in Stripe Dashboard

## 🆘 Troubleshooting

**Issue**: "Firebase: Error (auth/configuration-not-found)"
- **Fix**: Restart dev server after adding `.env` file

**Issue**: Content not loading in ebook
- **Fix**: Check that files are in `/public/ebook-content/`

**Issue**: Can't sign in with Google
- **Fix**: Enable Google provider in Firebase Console

## 📚 Documentation

- **Detailed Setup**: [`EBOOK_SETUP.md`](EBOOK_SETUP.md)
- **Project Overview**: [`README_EBOOK.md`](README_EBOOK.md)
- **Firebase Docs**: [firebase.google.com/docs](https://firebase.google.com/docs)
- **Stripe Docs**: [stripe.com/docs](https://stripe.com/docs)

---

**Total Time**: ~10 minutes ⏱️

**Status**: Demo mode (no real payments) ✅

**Ready for**: Testing & Development 🧪
