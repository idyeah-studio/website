import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import './Purchase.css';

// Only load Stripe if publishable key is provided
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

export const Purchase: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { currentUser, userPaidStatus, updateUserPaidStatus } = useAuth();
  const navigate = useNavigate();

  // If user already has access, redirect to ebook
  React.useEffect(() => {
    if (userPaidStatus) {
      navigate('/ebook');
    }
  }, [userPaidStatus, navigate]);

  const handlePurchase = async () => {
    if (!currentUser) {
      navigate('/signup');
      return;
    }

    try {
      setLoading(true);
      setError('');

      // Check if Stripe is configured
      if (stripePublishableKey) {
        // PRODUCTION MODE: Use Stripe Checkout
        // In a real implementation, you would:
        // 1. Call your backend API to create a Stripe Checkout Session
        // 2. Redirect to Stripe Checkout
        // 3. Handle webhook on success to update user's paid status
        
        const stripe = await stripePromise;
        
        if (!stripe) {
          throw new Error('Stripe failed to load');
        }

        // Example: Call your backend to create checkout session
        // const response = await fetch('/api/create-checkout-session', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     userId: currentUser.uid,
        //     priceId: import.meta.env.VITE_STRIPE_PRICE_ID
        //   })
        // });
        // const { sessionId } = await response.json();
        // await stripe.redirectToCheckout({ sessionId });
        
        setError('Stripe integration requires a backend. Please see EBOOK_SETUP.md for details.');
        return;
      }

      // DEMO MODE: Grant access without payment
      alert('🎉 Demo Mode Active!\n\nIn production, this would redirect to Stripe Checkout for payment.\n\nFor now, you\'ll get instant access to test the ebook platform.\n\nClick OK to continue...');
      await updateUserPaidStatus(true);
      navigate('/ebook');

    } catch (err: any) {
      setError(err.message || 'Failed to process purchase. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="purchase-container">
      <div className="purchase-card">
        <div className="purchase-header">
          <h1>AI Prompt Cookbook</h1>
          <p className="purchase-subtitle">Master AI Prompting with 75 Proven Recipes</p>
        </div>

        <div className="purchase-features">
          <h3>What You'll Get:</h3>
          <ul>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>75 comprehensive AI prompt recipes</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Step-by-step instructions for each recipe</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Real-world examples and use cases</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Lifetime access to all content</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Free updates and new recipes</span>
            </li>
          </ul>
        </div>

        <div className="purchase-pricing">
          <div className="price">
            <span className="price-currency">$</span>
            <span className="price-amount">49</span>
            <span className="price-period">one-time</span>
          </div>
          <p className="price-description">One-time payment. Lifetime access.</p>
        </div>

        {error && <div className="purchase-error">{error}</div>}

        <button 
          onClick={handlePurchase} 
          disabled={loading}
          className="purchase-button"
        >
          {loading ? 'Processing...' : 'Get Instant Access'}
        </button>

        <div className="purchase-guarantee">
          <p>🔒 Secure payment powered by Stripe</p>
          <p>💯 30-day money-back guarantee</p>
        </div>

        <div className="purchase-note">
          <p><strong>Note:</strong> This is currently in demo mode. In production, you would integrate with Stripe Checkout for secure payment processing.</p>
        </div>
      </div>
    </div>
  );
};
