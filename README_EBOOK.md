# 📚 AI Prompt Cookbook - Ebook Platform

A complete ebook platform with authentication, payment integration, and a beautiful reading experience for your AI Prompt Cookbook.

## ✨ Features

### 🔐 Authentication
- **Email/Password Authentication** via Firebase
- **Google Sign-in** integration
- Secure session management
- Password reset functionality

### 💳 Payment & Paywall
- **Stripe integration** ready for production
- **Demo mode** for development/testing
- One-time payment model ($49)
- Automatic access management

### 📖 Ebook Reader
- **Markdown rendering** with GitHub Flavored Markdown support
- **75 recipes** from your Notion export
- Beautiful, distraction-free reading interface
- Responsive design (mobile, tablet, desktop)
- Chapter navigation sidebar
- Code syntax highlighting
- Image support

### 🛡️ Security
- Protected routes (authentication required)
- Payment verification (only paid users can access content)
- Firestore security rules
- Environment variable protection

## 🎯 User Journey

```
1. Visit site → 2. Sign up → 3. Purchase → 4. Read ebook
                     ↓
              (Creates account)
                     ↓
              (Makes payment)
                     ↓
           (Gets lifetime access)
```

## 🚀 Quick Start

1. **Set up Firebase** (5 minutes)
   - Create project in Firebase Console
   - Enable Authentication & Firestore
   - Copy credentials to `.env`

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your Firebase credentials
   ```

3. **Run Development Server**
   ```bash
   npm install
   npm run dev
   ```

4. **Test the Flow**
   - Visit `http://localhost:5173/signup`
   - Create an account
   - "Purchase" the ebook (demo mode)
   - Access your content at `/ebook`

## 📋 What Was Built

### New Components

1. **Authentication System** ([`src/contexts/AuthContext.tsx`](src/contexts/AuthContext.tsx))
   - Context provider for auth state
   - Login/logout functions
   - Google Sign-in support
   - User paid status management

2. **Login Page** ([`src/components/Auth/Login.tsx`](src/components/Auth/Login.tsx))
   - Email/password login
   - Google Sign-in button
   - Forgot password link
   - Error handling

3. **Signup Page** ([`src/components/Auth/Signup.tsx`](src/components/Auth/Signup.tsx))
   - Account creation
   - Password confirmation
   - Google Sign-in option
   - Validation

4. **Purchase Page** ([`src/components/Purchase/Purchase.tsx`](src/components/Purchase/Purchase.tsx))
   - Product features list
   - Pricing display
   - Stripe integration (ready for production)
   - Demo mode for testing

5. **Ebook Reader** ([`src/components/Ebook/EbookReader.tsx`](src/components/Ebook/EbookReader.tsx))
   - Sidebar navigation
   - Markdown rendering
   - Access control
   - Responsive layout

### Configuration

- **Firebase Config** ([`src/config/firebase.ts`](src/config/firebase.ts))
- **Environment Variables** ([`.env.example`](.env.example))
- **Updated Routes** ([`src/App.tsx`](src/App.tsx))

### Content

- **75 Recipe Files** (copied to [`public/ebook-content/`](public/ebook-content/))
- **Images** (75+ images from Notion export)
- **Master Index** (main cookbook file)

## 🔧 Configuration Files

### Routes Added

```tsx
/signup     → Signup page
/login      → Login page
/purchase   → Payment/purchase page
/ebook      → Protected ebook reader
```

### Dependencies Added

```json
{
  "firebase": "^latest",
  "@stripe/stripe-js": "^latest",
  "react-markdown": "^latest",
  "remark-gfm": "^latest",
  "rehype-raw": "^latest",
  "rehype-sanitize": "^latest"
}
```

## 📊 Database Structure

### Firestore Collection: `users`

```javascript
{
  userId: {
    email: "user@example.com",
    hasPaid: boolean,
    createdAt: timestamp,
    updatedAt: timestamp
  }
}
```

## 🎨 Design Features

- **Gradient themes** (purple/blue)
- **Clean, modern UI**
- **Google brand guidelines** compliant
- **Accessible** color contrasts
- **Mobile-first** responsive design

## 📱 Responsive Breakpoints

- **Desktop**: Full sidebar + content
- **Tablet** (< 768px): Collapsible sidebar
- **Mobile** (< 480px): Optimized typography

## 🔒 Security Features

1. **Protected Routes**: Redirect unauthenticated users
2. **Payment Verification**: Check `hasPaid` status
3. **Firestore Rules**: User-specific read/write
4. **Environment Variables**: API keys not in code
5. **Firebase Auth**: Industry-standard authentication

## 💰 Monetization Ready

### Demo Mode (Current)
- No payment required
- Instant access after signup
- Perfect for development/testing

### Production Mode (Configure Stripe)
- Real payment processing
- Webhook integration needed
- Automatic access provisioning
- Secure payment flow

## 📖 Complete Documentation

See [`EBOOK_SETUP.md`](EBOOK_SETUP.md) for:
- Detailed setup instructions
- Firebase configuration guide
- Stripe integration steps
- Deployment guide
- Troubleshooting tips

## 🎓 Learning Resources

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [React Markdown](https://github.com/remarkjs/react-markdown)

## 🚢 Deployment Checklist

- [ ] Set up Firebase project
- [ ] Configure environment variables
- [ ] Test authentication flow
- [ ] Test purchase flow
- [ ] Set up Stripe (production)
- [ ] Create backend for webhooks
- [ ] Deploy frontend
- [ ] Update Firebase authorized domains
- [ ] Test production flow
- [ ] Launch! 🎉

## 📝 Notes

- **Current Status**: Fully functional in demo mode
- **Production Ready**: After Stripe configuration
- **Content**: 75 recipes + images included
- **Cost**: Firebase free tier sufficient for small scale

## 🆘 Need Help?

1. Check [`EBOOK_SETUP.md`](EBOOK_SETUP.md) for detailed instructions
2. Review browser console for errors
3. Check Firebase Console for auth/database issues
4. Verify environment variables are set

---

**Built with** ❤️ **using React, TypeScript, Firebase, and Stripe**
