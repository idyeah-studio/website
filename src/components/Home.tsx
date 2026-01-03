import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logoLight from '../assets/logo-symbol.png';
import logoDark from '../assets/logo-symbol-dark.png';
import profilePhoto from '../assets/profile-photo.jpg';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.bg,
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '24px',
          right: '24px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Theme Toggle - Left Side */}
        <button
          onClick={toggleTheme}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            borderRadius: '9999px',
            border: `1px solid ${theme.borderStrong}`,
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '14px',
            fontWeight: 400,
            color: theme.text
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
          }}
        >
          {isDarkMode ? (
            // Moon icon for dark mode
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 8.5C14.5 11.8137 11.8137 14.5 8.5 14.5C5.18629 14.5 2.5 11.8137 2.5 8.5C2.5 5.18629 5.18629 2.5 8.5 2.5C8.67742 2.5 8.85323 2.50806 9.02694 2.52387C7.91935 3.28226 7.21774 4.56452 7.21774 6C7.21774 8.34032 9.08871 10.2113 11.429 10.2113C12.8645 10.2113 14.1468 9.50968 14.9052 8.40209C14.921 8.57581 14.929 8.75161 14.929 8.92903C14.929 8.95242 14.9145 8.97581 14.9145 8.99919L14.5 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            // Sun icon for light mode
            <svg width="16" height="16" viewBox="0 0 19.6875 19.3457" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.66797 2.03125C10.2246 2.03125 10.6836 1.58203 10.6836 1.01562C10.6836 0.449219 10.2246 0 9.66797 0C9.10156 0 8.65234 0.449219 8.65234 1.01562C8.65234 1.58203 9.10156 2.03125 9.66797 2.03125ZM15.791 4.56055C16.3477 4.56055 16.7969 4.11133 16.7969 3.54492C16.7969 2.97852 16.3477 2.5293 15.791 2.5293C15.2246 2.5293 14.7754 2.97852 14.7754 3.54492C14.7754 4.11133 15.2246 4.56055 15.791 4.56055ZM18.3203 10.6836C18.877 10.6836 19.3262 10.2344 19.3262 9.66797C19.3262 9.10156 18.877 8.65234 18.3203 8.65234C17.7539 8.65234 17.3047 9.10156 17.3047 9.66797C17.3047 10.2344 17.7539 10.6836 18.3203 10.6836ZM15.791 16.8066C16.3477 16.8066 16.7969 16.3574 16.7969 15.791C16.7969 15.2246 16.3477 14.7754 15.791 14.7754C15.2246 14.7754 14.7754 15.2246 14.7754 15.791C14.7754 16.3574 15.2246 16.8066 15.791 16.8066ZM9.66797 19.3359C10.2246 19.3359 10.6836 18.8867 10.6836 18.3203C10.6836 17.7539 10.2246 17.3047 9.66797 17.3047C9.10156 17.3047 8.65234 17.7539 8.65234 18.3203C8.65234 18.8867 9.10156 19.3359 9.66797 19.3359ZM3.54492 16.8066C4.11133 16.8066 4.56055 16.3574 4.56055 15.791C4.56055 15.2246 4.11133 14.7754 3.54492 14.7754C2.97852 14.7754 2.5293 15.2246 2.5293 15.791C2.5293 16.3574 2.97852 16.8066 3.54492 16.8066ZM1.01562 10.6836C1.58203 10.6836 2.03125 10.2344 2.03125 9.66797C2.03125 9.10156 1.58203 8.65234 1.01562 8.65234C0.449219 8.65234 0 9.10156 0 9.66797C0 10.2344 0.449219 10.6836 1.01562 10.6836ZM3.54492 4.56055C4.11133 4.56055 4.56055 4.11133 4.56055 3.54492C4.56055 2.97852 4.11133 2.5293 3.54492 2.5293C2.97852 2.5293 2.5293 2.97852 2.5293 3.54492C2.5293 4.11133 2.97852 4.56055 3.54492 4.56055Z" fill="currentColor" fillOpacity="0.85"/>
              <path d="M9.66797 14.6387C12.4121 14.6387 14.6387 12.4121 14.6387 9.66797C14.6387 6.92383 12.4121 4.6875 9.66797 4.6875C6.92383 4.6875 4.6875 6.92383 4.6875 9.66797C4.6875 12.4121 6.92383 14.6387 9.66797 14.6387ZM9.66797 13.1543C7.73438 13.1543 6.17188 11.6016 6.17188 9.66797C6.17188 7.73438 7.73438 6.17188 9.66797 6.17188C11.6016 6.17188 13.1543 7.73438 13.1543 9.66797C13.1543 11.6016 11.6016 13.1543 9.66797 13.1543Z" fill="currentColor" fillOpacity="0.85"/>
            </svg>
          )}
        </button>

        {/* Right Side Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          {/* Ebook Button */}
          <a
            href="https://idyeah.gumroad.com/l/design-ai-alchemy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#9d5773',
              textDecoration: 'none',
              padding: '6px 16px',
              borderRadius: '9999px',
              border: '1px solid #c98ba0',
              backgroundColor: 'rgba(201, 139, 160, 0.06)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = '#9d5773';
              target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgba(201, 139, 160, 0.06)';
              target.style.color = '#9d5773';
            }}
          >
            Design AI Alchemy (Ebook)
          </a>

          {/* Founder Profile Button */}
          <Link
            to="/founderprofile"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: theme.text,
              textDecoration: 'none',
              padding: '6px 16px',
              borderRadius: '9999px',
              border: `1px solid ${theme.borderStrong}`,
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = theme.buttonBg;
              target.style.color = theme.buttonText;
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)';
              target.style.color = theme.text;
            }}
          >
            Founder Profile
          </Link>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 16px'
        }}
      >

        {/* Hero Section */}
        <div
          style={{
            paddingTop: '64px',
            paddingBottom: '96px',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '48px'
            }}
          >
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="IDYeah Studio"
              style={{
                width: 'clamp(240px, 60vw, 320px)',
                height: 'auto',
                animation: 'float 5s ease-in-out infinite alternate',
                filter: isDarkMode ? 'drop-shadow(0 8px 24px rgba(255, 255, 255, 0.1))' : 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.06))'
              }}
            />
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 8vw, 40px)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: theme.text,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(24px, 5vw, 40px)',
              padding: '0 16px'
            }}
          >
            Clarity that ships.
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 4vw, 18px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: theme.textSecondary,
              maxWidth: '600px',
              margin: '0 auto 32px',
              padding: '0 16px'
            }}
          >
            Strategic brand and UX direction for founders building real products. No bloat. No endless decks. Just the clarity you need to move forward.
          </p>

          {/* Trusted By */}
          <p
            style={{
              fontSize: 'clamp(13px, 3vw, 14px)',
              fontWeight: 400,
              color: theme.textTertiary,
              letterSpacing: '0.02em'
            }}
          >
            Trusted by founders at early and mid stage startups
          </p>
        </div>

        {/* What You Get */}
        <div
          style={{
            paddingBottom: 'clamp(64px, 15vw, 96px)',
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
              backgroundColor: theme.divider
            }}
          />

          <h2
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: theme.text,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: 'clamp(64px, 15vw, 96px)',
              paddingTop: 'clamp(64px, 15vw, 80px)'
            }}
          >
            What You Get
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 8vw, 56px)' }}>
            <div
              style={{
                padding: 'clamp(24px, 6vw, 32px)',
                borderRadius: '16px',
                background: theme.cardBg,
                border: `1px solid ${theme.border}`,
                transition: 'all 0.3s'
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: theme.text,
                  marginBottom: 'clamp(12px, 3vw, 16px)'
                }}
              >
                Brand/UX Audit
              </h3>
              <p
                style={{
                  fontSize: 'clamp(15px, 3.5vw, 16px)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: theme.textSecondary
                }}
              >
                One focused session. What's working, what's broken, what to fix first. You leave with a written summary and a prioritized roadmap.
              </p>
            </div>

            <div
              style={{
                padding: 'clamp(24px, 6vw, 32px)',
                borderRadius: '16px',
                background: theme.cardBg,
                border: `1px solid ${theme.border}`,
                transition: 'all 0.3s'
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: theme.text,
                  marginBottom: 'clamp(12px, 3vw, 16px)'
                }}
              >
                Positioning & Messaging
              </h3>
              <p
                style={{
                  fontSize: 'clamp(15px, 3.5vw, 16px)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: theme.textSecondary
                }}
              >
                Sharp, credible positioning that cuts through noise. Messaging that connects with your audience and differentiates you from everyone else.
              </p>
            </div>

            <div
              style={{
                padding: 'clamp(24px, 6vw, 32px)',
                borderRadius: '16px',
                background: theme.cardBg,
                border: `1px solid ${theme.border}`,
                transition: 'all 0.3s'
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: theme.text,
                  marginBottom: 'clamp(12px, 3vw, 16px)'
                }}
              >
                Product Design
              </h3>
              <p
                style={{
                  fontSize: 'clamp(15px, 3.5vw, 16px)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: theme.textSecondary
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
            paddingBottom: 'clamp(64px, 15vw, 96px)',
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
              backgroundColor: theme.divider
            }}
          />

          <h2
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: theme.text,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: 'clamp(64px, 15vw, 96px)',
              paddingTop: 'clamp(64px, 15vw, 80px)'
            }}
          >
            How This Works
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(20px, 5vw, 24px)',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Great products earn trust through clarity. Most lose it through inconsistency, misalignment, and noise.
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Most engagements are scoped between 100-150 hours and delivered over 3-6 weeks. Projects can be structured as focused audits or complete redesigns. Retainer engagements are not currently available.
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              You get strategic thinking, practical execution, and outputs that fit your reality—not theoretical frameworks or month-long processes.
            </p>

            {/* What You'll Receive */}
            <div
              style={{
                marginTop: '32px',
                padding: 'clamp(24px, 6vw, 32px)',
                borderRadius: '16px',
                background: theme.cardBg,
                border: `1px solid ${theme.border}`
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: theme.text,
                  marginBottom: '16px'
                }}
              >
                What You'll Receive
              </h3>
              <div
                style={{
                  fontSize: 'clamp(15px, 3.5vw, 16px)',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: theme.textSecondary
                }}
              >
                <div style={{ marginBottom: '8px' }}>→ Written summary in Notion or Figma</div>
                <div style={{ marginBottom: '8px' }}>→ Prioritized action roadmap</div>
                <div style={{ marginBottom: '8px' }}>→ Annotated designs or wireframes (if applicable)</div>
                <div>→ 2 weeks of async support post-delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Different */}
        <div
          style={{
            paddingBottom: 'clamp(64px, 15vw, 96px)',
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
              backgroundColor: theme.divider
            }}
          />

          <h2
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: theme.text,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: 'clamp(64px, 15vw, 96px)',
              paddingTop: 'clamp(64px, 15vw, 80px)'
            }}
          >
            What's Different
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(20px, 5vw, 24px)',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              This is a one-person studio. When you work with me, you get focused, undivided attention—no account managers, no handoffs, no time-sharing across multiple clients.
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              I blend human craft with AI-assisted workflows to deliver strategic work at speed without compromising quality. You get senior-level thinking and execution, optimized for real constraints.
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Every project is designed to create momentum, not dependency. You walk away with clarity, direction, and the ability to move forward on your own terms.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          style={{
            paddingBottom: 'clamp(64px, 15vw, 96px)',
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
              backgroundColor: theme.divider
            }}
          />

          <h2
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: theme.text,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: 'clamp(64px, 15vw, 96px)',
              paddingTop: 'clamp(64px, 15vw, 80px)'
            }}
          >
            Common Questions
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            {[
              {
                q: "What if I'm pre-launch or very early stage?",
                a: "Perfect. Early-stage is where strategic direction has the most impact. Many clients come to me before their first release to ensure they're building something clear and focused."
              },
              {
                q: "Do you work with non-tech products?",
                a: "Yes. While most of my work is in SaaS and digital products, the principles of clarity and trust apply universally. If you're building something real, we can work together."
              },
              {
                q: "What format are the deliverables?",
                a: "Most audits are delivered as Notion documents with clear sections, prioritized recommendations, and next steps. Design work is shared via Figma. Everything is practical and actionable."
              },
              {
                q: "How quickly can we start?",
                a: "Typically within 1-2 weeks of our initial conversation. I keep my client load intentionally small to maintain quality and focus."
              }
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  padding: '8px 24px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  background: expandedFaq === index ? theme.cardBgHover : theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  transition: 'all 0.3s'
                }}
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: expandedFaq === index ? '12px' : '0'
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(15px, 3.5vw, 16px)',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: theme.text
                    }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    style={{
                      fontSize: '20px',
                      color: theme.textTertiary,
                      transition: 'transform 0.3s',
                      transform: expandedFaq === index ? 'rotate(45deg)' : 'rotate(0)',
                      marginLeft: '16px',
                      flexShrink: 0
                    }}
                  >
                    +
                  </span>
                </div>
                {expandedFaq === index && (
                  <p
                    style={{
                      fontSize: 'clamp(14px, 3.5vw, 15px)',
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: theme.textSecondary
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* This Is For You If */}
        <div
          style={{
            paddingBottom: 'clamp(64px, 15vw, 96px)',
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
              backgroundColor: theme.divider
            }}
          />

          <h2
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: theme.text,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: 'clamp(64px, 15vw, 96px)',
              paddingTop: 'clamp(64px, 15vw, 80px)'
            }}
          >
            This Is For You If
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(20px, 5vw, 24px)',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              You're a founder or product leader shipping something real. You have constraints. You value craft, but you need to move fast.
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Your product needs sharper positioning, clearer UX, or more cohesive branding—but you don't need an agency or six months of strategy sessions.
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                marginTop: 0,
                marginBottom: 0
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
            paddingBottom: 'clamp(64px, 15vw, 96px)'
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: 'clamp(32px, 8vw, 40px)',
              borderRadius: '24px',
              marginBottom: '32px',
              background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.015)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}`,
              maxWidth: '100%'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 500,
                lineHeight: 1.6,
                color: theme.text,
                marginBottom: 'clamp(24px, 6vw, 32px)'
              }}
            >
              Let's talk about your product.
            </p>

            <a
              href="https://calendly.com/vishal-idyeah/30min"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: 'inline-block',
                backgroundColor: isHovered ? theme.buttonBgHover : theme.buttonBg,
                color: theme.buttonText,
                padding: '12px 28px',
                borderRadius: '9999px',
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 500,
                textDecoration: 'none',
                cursor: 'pointer',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isHovered ? (isDarkMode ? '0 4px 12px rgba(255, 255, 255, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.15)') : 'none',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              Book Your Audit
            </a>

            <p
              style={{
                fontSize: 'clamp(13px, 3vw, 14px)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: theme.textTertiary,
                maxWidth: '480px',
                margin: '24px auto 0',
                padding: '0 16px'
              }}
            >
              30-minute intro call. Free. We'll discuss your product and whether an audit makes sense.
            </p>
          </div>
        </div>

        {/* About / Footer with Photo */}
        <div
          style={{
            textAlign: 'center',
            padding: 'clamp(64px, 15vw, 80px) 0',
            borderTop: `1px solid ${theme.divider}`
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
            <img
              src={profilePhoto}
              alt="Vishal"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '16px',
                filter: 'grayscale(100%)',
                border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'}`
              }}
            />
            <p
              style={{
                fontSize: 'clamp(14px, 3.5vw, 15px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: theme.textSecondary,
                maxWidth: '480px',
                margin: '0 auto 24px'
              }}
            >
              Hi, I'm Vishal. I've spent years helping founders clarify their brand and product direction. I work fast, stay focused, and only take on projects where I can make a real impact.
            </p>
          </div>

          <p
            style={{
              fontSize: 'clamp(13px, 3vw, 14px)',
              fontWeight: 400,
              color: theme.textTertiary,
              marginBottom: '8px'
            }}
          >
            Design for the real world.
          </p>
          <p
            style={{
              fontSize: 'clamp(13px, 3vw, 14px)',
              fontWeight: 400,
              color: isDarkMode ? '#606060' : '#AFAFAF',
              marginBottom: '16px'
            }}
          >
            © 2026. IDYeah Studio
          </p>
          <p
            style={{
              fontSize: 'clamp(12px, 3vw, 13px)',
              fontWeight: 400,
              color: isDarkMode ? '#606060' : '#AFAFAF'
            }}
          >
            <a
              href="mailto:vishal@idyeah.studio"
              style={{
                color: theme.textTertiary,
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme.text}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.textTertiary}
            >
              vishal@idyeah.studio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
