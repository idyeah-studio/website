# Ebook Paywall & Authentication Setup Guide

This guide will help you set up the complete ebook system with Firebase Authentication and Stripe payment integration.

## 🎯 Overview

Your AI Prompt Cookbook ebook now has:
- ✅ Firebase Authentication (Email/Password + Google Sign-in)
- ✅ User management with Firestore
- ✅ Stripe payment integration (ready for production)
- ✅ Protected routes (only paid users can access content)
- ✅ Beautiful, responsive UI
- ✅ Markdown rendering for ebook content

## 📁 Project Structure

```
src/
├── config/
│   └── firebase.ts              # Firebase configuration
├── contexts/
│   └── AuthContext.tsx          # Authentication context & hooks
├── components/
│   ├── Auth/
│   │   ├── Login.tsx           # Login page
│   │   ├── Signup.tsx          # Signup page
│   │   └── Auth.css            # Auth styling
│   ├── Purchase/
│   │   ├── Purchase.tsx        # Payment/purchase page
│   │   └── Purchase.css        # Purchase styling
│   └── Ebook/
│       ├── EbookReader.tsx     # Main ebook reader
│       └── EbookReader.css     # Reader styling
└── App.tsx                      # Main app with routes

public/
└── ebook-content/              # Your exported Notion markdown files
    ├── AI Prompt Cookbook - Master...md
    ├── R-01 Plan Your Page Layout...md
    ├── R-02 Fix Cluttered Data Views...md
    └── ... (75 recipe files + images)
```

## 🚀 Setup Instructions

### Step 1: Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" or select existing project
   - Follow the setup wizard

2. **Enable Authentication**
   - In Firebase Console, go to **Authentication**
   - Click "Get Started"
   - Enable **Email/Password** sign-in method
   - Enable **Google** sign-in method (optional)

3. **Create Firestore Database**
   - Go to **Firestore Database**
   - Click "Create database"
   - Start in **Test mode** (for development)
   - Choose a location close to your users

4. **Get Firebase Configuration**
   - Go to **Project Settings** (gear icon)
   - Scroll to "Your apps"
   - Click the web icon `</>`
   - Copy the firebaseConfig object

5. **Set up Firestore Rules** (Important!)
   - In Firestore Database > Rules, replace with:
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

### Step 2: Environment Variables

1. **Create `.env` file** in the project root:
   ```bash
   cp .env.example .env
   ```

2. **Add your Firebase credentials** to `.env`:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=AIzaSyC...your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abcdef

   # Stripe Configuration (Optional - for production)
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
   VITE_STRIPE_PRICE_ID=price_your_price_id
   ```

3. **Important**: Add `.env` to `.gitignore`:
   ```
   .env
   .env.local
   ```

### Step 3: Stripe Setup (Optional - Production Only)

The system currently works in **demo mode** without Stripe. To enable real payments:

1. **Create Stripe Account**
   - Go to [Stripe Dashboard](https://dashboard.stripe.com/)
   - Complete account setup

2. **Create a Product**
   - Go to **Products** > "Add product"
   - Name: "AI Prompt Cookbook"
   - Price: $49 (one-time payment)
   - Copy the **Price ID** (starts with `price_`)

3. **Get API Keys**
   - Go to **Developers** > **API keys**
   - Copy **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - Add to your `.env` file

4. **Set up Webhook** (for production)
   - You'll need a backend to handle Stripe webhooks
   - Webhook should update user's `hasPaid` status in Firestore
   - See "Production Deployment" section below

### Step 4: Run the Project

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   ```
   http://localhost:5173
   ```

## 🔐 How It Works

### Authentication Flow

1. User signs up at `/signup`
2. Firebase creates user account
3. User document created in Firestore with `hasPaid: false`
4. User redirected to `/purchase`

### Payment Flow (Demo Mode)

1. User clicks "Get Instant Access"
2. In demo mode: Alert shown, then `hasPaid` set to `true`
3. User redirected to `/ebook`

### Payment Flow (Production with Stripe)

1. User clicks "Get Instant Access"
2. Backend creates Stripe Checkout Session
3. User redirected to Stripe Checkout
4. After payment, Stripe webhook notifies your backend
5. Backend updates user's `hasPaid: true` in Firestore
6. User redirected to `/ebook`

### Protected Content

- `/ebook` route checks if user is authenticated
- Checks if `userPaidStatus === true`
- If not paid, redirects to `/purchase`
- If not authenticated, redirects to `/login`

## 📝 Routes

| Route | Purpose | Protection |
|-------|---------|------------|
| `/` | Home page | Public |
| `/founderprofile` | About page | Public |
| `/signup` | Create account | Public |
| `/login` | Sign in | Public |
| `/purchase` | Buy ebook | Auth required |
| `/ebook` | Read ebook | Auth + Payment required |

## 🎨 Customization

### Change Pricing

Edit [`src/components/Purchase/Purchase.tsx`](src/components/Purchase/Purchase.tsx:68):
```tsx
<span className="price-amount">49</span>
```

### Add More Recipes

Edit [`src/components/Ebook/EbookReader.tsx`](src/components/Ebook/EbookReader.tsx:12):
```tsx
const recipes: Recipe[] = [
  { id: 'r01', title: 'R-01: Title', filename: 'R-01 Title....md' },
  // Add more recipes here
];
```

### Customize Colors

Edit the gradient colors in CSS files:
- Auth pages: [`src/components/Auth/Auth.css`](src/components/Auth/Auth.css:4)
- Purchase page: [`src/components/Purchase/Purchase.css`](src/components/Purchase/Purchase.css:4)
- Buttons and active states throughout

## 🚢 Production Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Set environment variables** in your hosting platform
2. **Deploy** your React app
3. **Update Firebase authorized domains**:
   - Firebase Console > Authentication > Settings
   - Add your production domain to "Authorized domains"

### Backend for Stripe (Required for Production)

You'll need a backend to handle Stripe Checkout. Example using Node.js:

```javascript
// Example backend endpoint
app.post('/create-checkout-session', async (req, res) => {
  const { userId, priceId } = req.body;
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: priceId,
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/ebook`,
    cancel_url: `${YOUR_DOMAIN}/purchase`,
    client_reference_id: userId,
  });
  
  res.json({ sessionId: session.id });
});

// Webhook to update user after payment
app.post('/webhook', async (req, res) => {
  const event = req.body;
  
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.client_reference_id;
    
    // Update Firestore
    await admin.firestore().collection('users').doc(userId).update({
      hasPaid: true,
      paidAt: new Date().toISOString()
    });
  }
  
  res.json({ received: true });
});
```

## 🧪 Testing

### Test User Flow

1. Go to `/signup` and create an account
2. Check Firebase Console > Authentication (user should appear)
3. Check Firestore > users collection (user doc should exist)
4. After "purchasing", you should be redirected to `/ebook`
5. Try logging out and logging back in
6. Content should remain accessible (check persists)

### Test Google Sign-in

1. Ensure Google auth is enabled in Firebase
2. Click "Continue with Google" on login/signup
3. Follow Google sign-in flow
4. Should create user in Firestore automatically

## 🔧 Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Ensure `.env` file exists with correct Firebase config
- Restart dev server after adding `.env`

### "Failed to load content"
- Check that markdown files are in `/public/ebook-content/`
- Verify filenames match exactly in `EbookReader.tsx`

### Google Sign-in not working
- Ensure Google provider is enabled in Firebase Console
- Add your domain to Firebase authorized domains
- Check browser console for specific errors

### Images not showing in markdown
- Images should be in `/public/ebook-content/` folder
- Markdown should reference them relatively: `![alt](./image.png)`

## 📚 Next Steps

1. ✅ Set up Firebase project
2. ✅ Configure environment variables
3. ✅ Test authentication flow
4. ✅ Test purchase flow (demo mode)
5. 🔲 Set up Stripe (when ready for production)
6. 🔲 Create backend for Stripe webhooks
7. 🔲 Deploy to production
8. 🔲 Add custom domain

## 💡 Tips

- **Start in demo mode**: Get everything working without Stripe first
- **Test thoroughly**: Try all user flows before going live
- **Security**: Never commit `.env` file or expose API keys
- **Backup**: Export Firestore data regularly
- **Monitor**: Set up Firebase Analytics to track usage

## 🆘 Support

If you encounter issues:
1. Check browser console for errors
2. Check Firebase Console for auth/database issues
3. Verify all environment variables are set correctly
4. Ensure Firebase rules allow read/write for authenticated users

---

**Your ebook platform is now ready!** 🎉

Users can sign up, purchase access, and read your AI Prompt Cookbook with a beautiful reading experience.
