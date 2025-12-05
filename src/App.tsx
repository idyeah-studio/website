import { useState } from 'react';
import './index.css';
import logo from './assets/logo-symbol.png';
import profilePhoto from './assets/profile-photo.jpg';
//import ProposalCyberultron from "./ProposalCyberultron";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const path = window.location.pathname;

 // if (path === "/proposal-cyberultron-dec2025") {
   // return <ProposalCyberultron />;
  //}

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
              src={logo} 
              alt="IDYeah Studio"
              style={{
                width: 'clamp(240px, 60vw, 320px)',
                height: 'auto',
                animation: 'float 5s ease-in-out infinite alternate',
                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.06))'
              }}
            />
          </div>

          <h1 
            style={{
              fontSize: 'clamp(32px, 8vw, 40px)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#222222',
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
              color: '#505050',
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
              color: '#8A8A8A',
              letterSpacing: '0.02em'
            }}
          >
            Trusted by founders at early and mid stage startups
          </p>
        </div>

        {/* What You Get */}
        <div 
          style={{
            paddingBottom: 'clamp(96px, 20vw, 144px)',
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
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
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
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s'
              }}
            >
              <h3 
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222',
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
                  color: '#505050'
                }}
              >
                One focused session. What's working, what's broken, what to fix first. You leave with a written summary and a prioritized roadmap.
              </p>
            </div>

            <div 
              style={{
                padding: 'clamp(24px, 6vw, 32px)',
                borderRadius: '16px',
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s'
              }}
            >
              <h3 
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222',
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
                  color: '#505050'
                }}
              >
                Sharp, credible positioning that cuts through noise. Messaging that connects with your audience and differentiates you from everyone else.
              </p>
            </div>

            <div 
              style={{
                padding: 'clamp(24px, 6vw, 32px)',
                borderRadius: '16px',
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s'
              }}
            >
              <h3 
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222',
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
                  color: '#505050'
                }}
              >
                Interfaces that feel intentional. Clean, usable, trustworthy. Designed with a modern workflow that balances craft and speed.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {/*
        <div 
          style={{
            paddingBottom: 'clamp(96px, 20vw, 144px)',
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
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: 'clamp(64px, 15vw, 96px)',
              paddingTop: 'clamp(64px, 15vw, 80px)'
            }}
          >
            What Founders Say
          </h2>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(40px, 10vw, 48px)',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <div>
              <p 
                style={{
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#222222',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}
              >
                "The audit identified issues we'd been circling for months but couldn't articulate. Within two weeks, we shipped changes that immediately improved our conversion."
              </p>
              <p 
                style={{
                  fontSize: 'clamp(14px, 3vw, 15px)',
                  fontWeight: 500,
                  color: '#505050'
                }}
              >
                — Sarah Chen, Founder at [Company Name]
              </p>
            </div>

            <div>
              <p 
                style={{
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#222222',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}
              >
                "No fluff, no theater. Just clear, actionable direction that helped us move forward. Exactly what an early-stage team needs."
              </p>
              <p 
                style={{
                  fontSize: 'clamp(14px, 3vw, 15px)',
                  fontWeight: 500,
                  color: '#505050'
                }}
              >
                — Marcus Rodriguez, Product Lead at [Company Name]
              </p>
            </div>
          </div>
        </div>
        */}

        {/* How This Works */}
        <div 
          style={{
            paddingBottom: 'clamp(96px, 20vw, 144px)',
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
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
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
              gap: 'clamp(32px, 8vw, 40px)',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Great products earn trust through clarity. Most lose it through inconsistency, misalignment, and noise.
            </p>

            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Most engagements are scoped between 100-150 hours and delivered over 3-6 weeks. Projects can be structured as focused audits or complete redesigns. Retainer engagements are not currently available.
            </p>

            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
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
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <h3 
                style={{
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222',
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
                  color: '#505050'
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
            paddingBottom: 'clamp(96px, 20vw, 144px)',
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
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
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
              gap: 'clamp(32px, 8vw, 40px)',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              This is a one-person studio. When you work with me, you get focused, undivided attention—no account managers, no handoffs, no time-sharing across multiple clients.
            </p>

            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              I blend human craft with AI-assisted workflows to deliver strategic work at speed without compromising quality. You get senior-level thinking and execution, optimized for real constraints.
            </p>

            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Every project is designed to create momentum, not dependency. You walk away with clarity, direction, and the ability to move forward on your own terms.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div 
          style={{
            paddingBottom: 'clamp(96px, 20vw, 144px)',
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
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
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
                  background: expandedFaq === index ? 'rgba(0, 0, 0, 0.02)' : 'rgba(0, 0, 0, 0.01)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
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
                      color: '#222222'
                    }}
                  >
                    {faq.q}
                  </h3>
                  <span 
                    style={{
                      fontSize: '20px',
                      color: '#8A8A8A',
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
                      color: '#505050'
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
            paddingBottom: 'clamp(96px, 20vw, 144px)',
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
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
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
              gap: 'clamp(32px, 8vw, 40px)',
              maxWidth: '640px',
              margin: '0 auto'
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              You're a founder or product leader shipping something real. You have constraints. You value craft, but you need to move fast.
            </p>

            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050'
              }}
            >
              Your product needs sharper positioning, clearer UX, or more cohesive branding—but you don't need an agency or six months of strategy sessions.
            </p>

            <p 
              style={{
                fontSize: 'clamp(15px, 3.5vw, 16px)',
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
            paddingBottom: 'clamp(64px, 15vw, 96px)'
          }}
        >
          <div 
            style={{
              display: 'inline-block',
              padding: 'clamp(32px, 8vw, 40px)',
              borderRadius: '24px',
              marginBottom: '32px',
              background: 'rgba(0, 0, 0, 0.015)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              maxWidth: '100%'
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 500,
                lineHeight: 1.6,
                color: '#222222',
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
                backgroundColor: isHovered ? '#111111' : '#000000',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '9999px',
                fontSize: 'clamp(15px, 3.5vw, 16px)',
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
                fontSize: 'clamp(13px, 3vw, 14px)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#8A8A8A',
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
            borderTop: '1px solid #E5E5E5'
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
                border: '2px solid rgba(0, 0, 0, 0.06)'
              }}
            />
            <p 
              style={{
                fontSize: 'clamp(14px, 3.5vw, 15px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#505050',
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
              color: '#8A8A8A',
              marginBottom: '8px'
            }}
          >
            Design for the real world.
          </p>
          <p 
            style={{
              fontSize: 'clamp(13px, 3vw, 14px)',
              fontWeight: 400,
              color: '#AFAFAF',
              marginBottom: '16px'
            }}
          >
            © 2025. IDYeah Studio
          </p>
          <p 
            style={{
              fontSize: 'clamp(12px, 3vw, 13px)',
              fontWeight: 400,
              color: '#AFAFAF'
            }}
          >
            <a 
              href="mailto:vishal@idyeah.studio"
              style={{
                color: '#8A8A8A',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#222222'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8A8A8A'}
            >
              vishal@idyeah.studio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
