import { useState } from 'react';
import './index.css';
import logo from './assets/logo-symbol.png';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        
        {/* Hero Section */}
        <div 
          style={{
            paddingTop: '96px',
            paddingBottom: '144px',
            textAlign: 'center'
          }}
        >
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '80px'
            }}
          >
            <img 
              src={logo} 
              alt="IDYeah Studio"
              style={{
                width: '320px',
                height: 'auto',
                animation: 'float 5s ease-in-out infinite alternate',
                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.06))'
              }}
            />
          </div>

          <h1 
            style={{
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#222222',
              letterSpacing: '-0.02em',
              marginBottom: '40px'
            }}
          >
            Clarity that ships.
          </h1>

          <p 
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#505050',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Strategic brand and UX direction for founders building real products. No bloat. No endless decks. Just the clarity you need to move forward.
          </p>
        </div>

        {/* What You Get */}
        <div 
          style={{
            paddingBottom: '144px',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '48px',
              height: '1px',
              backgroundColor: '#E5E5E5'
            }}
          />
          
          <h2 
            style={{
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: '96px',
              paddingTop: '80px'
            }}
          >
            What You Get
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            <div 
              style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s'
              }}
            >
              <h3 
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222',
                  marginBottom: '16px'
                }}
              >
                Brand/UX Audit
              </h3>
              <p 
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#505050'
                }}
              >
                One focused session. What's working, what's broken, what to fix first. You leave with a written summary and a prioritized roadmap.
              </p>
            </div>

            <div 
              style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s'
              }}
            >
              <h3 
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222',
                  marginBottom: '16px'
                }}
              >
                Positioning & Messaging
              </h3>
              <p 
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#505050'
                }}
              >
                Sharp, credible positioning that cuts through noise. Messaging that connects with your audience and differentiates you from everyone else.
              </p>
            </div>

            <div 
              style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s'
              }}
            >
              <h3 
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222',
                  marginBottom: '16px'
                }}
              >
                Product Design
              </h3>
              <p 
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#505050'
                }}
              >
                Interfaces that feel intentional. Clean, usable, trustworthy. Designed with a modern workflow that balances craft and speed.
              </p>
            </div>
          </div>
        </div>

        {/* How This Works */}
        <div 
          style={{
            paddingBottom: '144px',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '48px',
              height: '1px',
              backgroundColor: '#E5E5E5'
            }}
          />
          
          <h2 
            style={{
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: '96px',
              paddingTop: '80px'
            }}
          >
            How This Works
          </h2>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Great products earn trust through clarity. Most lose it through inconsistency, misalignment, and noise.
            </p>

            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Most engagements are scoped between 150-200 hours and delivered over 3-6 weeks. Projects can be structured as focused audits or complete redesigns. Retainer engagements are not currently available.
            </p>

            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              You get strategic thinking, practical execution, and outputs that fit your reality—not theoretical frameworks or month-long processes.
            </p>
          </div>
        </div>

        {/* What's Different */}
        <div 
          style={{
            paddingBottom: '144px',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '48px',
              height: '1px',
              backgroundColor: '#E5E5E5'
            }}
          />
          
          <h2 
            style={{
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: '96px',
              paddingTop: '80px'
            }}
          >
            What's Different
          </h2>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              This is a one-person studio. When you work with me, you get focused, undivided attention—no account managers, no handoffs, no time-sharing across multiple clients.
            </p>

            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              I blend human craft with AI-assisted workflows to deliver strategic work at speed without compromising quality. You get senior-level thinking and execution, optimized for real constraints.
            </p>

            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Every project is designed to create momentum, not dependency. You walk away with clarity, direction, and the ability to move forward on your own terms.
            </p>
          </div>
        </div>

        {/* Ideal Client */}
        <div 
          style={{
            paddingBottom: '144px',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '48px',
              height: '1px',
              backgroundColor: '#E5E5E5'
            }}
          />
          
          <h2 
            style={{
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: '96px',
              paddingTop: '80px'
            }}
          >
            This Is For You If
          </h2>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              You're a founder or product leader shipping something real. You have constraints. You value craft, but you need to move fast.
            </p>

            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Your product needs sharper positioning, clearer UX, or more cohesive branding—but you don't need an agency or six months of strategy sessions.
            </p>

            <p 
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              You need someone who understands the work and can help you get unstuck. Now.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          style={{
            textAlign: 'center',
            paddingBottom: '96px'
          }}
        >
          <div 
            style={{
              display: 'inline-block',
              padding: '40px',
              borderRadius: '24px',
              marginBottom: '32px',
              background: 'rgba(0, 0, 0, 0.015)',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
          >
            <p 
              style={{
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: 1.6,
                color: '#222222',
                marginBottom: '32px'
              }}
            >
              Let's talk about your product.
            </p>

            <a
              href="mailto:vishal@idyeah.studio"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: 'inline-block',
                backgroundColor: isHovered ? '#111111' : '#000000',
                color: '#ffffff',
                padding: '14px 36px',
                borderRadius: '9999px',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
                cursor: 'pointer',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              Book Your Audit
            </a>

            <p 
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#8A8A8A',
                maxWidth: '480px',
                margin: '32px auto 0'
              }}
            >
              60–75 minutes. One product. Real feedback. Clear next steps.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div 
          style={{
            textAlign: 'center',
            padding: '80px 0',
            borderTop: '1px solid #E5E5E5'
          }}
        >
          <p 
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#8A8A8A',
              marginBottom: '8px'
            }}
          >
            Design for the real world.
          </p>
          <p 
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#AFAFAF'
            }}
          >
            © 2025. IDYeah Studio
          </p>
        </div>
      </div>
    </div>
  );
}
