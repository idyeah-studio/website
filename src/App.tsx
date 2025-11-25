import { useState } from 'react';
import './index.css';
import logo from './assets/logo-symbol.png';
import profilePhoto from './assets/profile-photo.jpg';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}>
      <div className="w-full max-w-[720px] mx-auto px-4 sm:px-6">
        
        {/* Hero Section */}
        <div className="pt-16 sm:pt-24 pb-24 sm:pb-36 text-center">
          <div className="flex justify-center mb-12 sm:mb-20">
            <img 
              src={logo} 
              alt="IDYeah Studio"
              className="w-[240px] sm:w-[320px] h-auto"
              style={{
                animation: 'float 5s ease-in-out infinite alternate',
                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.06))'
              }}
            />
          </div>

          <h1 
            className="mb-6 sm:mb-10 px-4"
            style={{
              fontSize: 'clamp(32px, 8vw, 40px)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#222222',
              letterSpacing: '-0.02em'
            }}
          >
            Clarity that ships.
          </h1>

          <p 
            className="px-4 mb-8"
            style={{
              fontSize: 'clamp(16px, 4vw, 18px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#505050',
              maxWidth: '600px',
              margin: '0 auto 32px'
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
            Trusted by founders at early-stage SaaS, fintech, and B2B products
          </p>
        </div>

        {/* What You Get */}
        <div className="pb-24 sm:pb-36 relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px" 
            style={{ backgroundColor: '#E5E5E5' }}
          />
          
          <h2 
            className="text-center mb-16 sm:mb-24 pt-16 sm:pt-20"
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em'
            }}
          >
            What You Get
          </h2>

          <div className="space-y-8 sm:space-y-14">
            <div 
              className="p-6 sm:p-8 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <h3 
                className="mb-3 sm:mb-4"
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222'
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
              className="p-6 sm:p-8 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <h3 
                className="mb-3 sm:mb-4"
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222'
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
              className="p-6 sm:p-8 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <h3 
                className="mb-3 sm:mb-4"
                style={{
                  fontSize: 'clamp(18px, 4.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222'
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
        <div className="pb-24 sm:pb-36 relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px" 
            style={{ backgroundColor: '#E5E5E5' }}
          />
          
          <h2 
            className="text-center mb-16 sm:mb-24 pt-16 sm:pt-20"
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em'
            }}
          >
            What Founders Say
          </h2>

          <div className="space-y-10 sm:space-y-12 max-w-[640px] mx-auto">
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

        {/* How This Works */}
        <div className="pb-24 sm:pb-36 relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px" 
            style={{ backgroundColor: '#E5E5E5' }}
          />
          
          <h2 
            className="text-center mb-16 sm:mb-24 pt-16 sm:pt-20"
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em'
            }}
          >
            How This Works
          </h2>

          <div className="space-y-8 sm:space-y-10 max-w-[640px] mx-auto">
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
              Most engagements are scoped between 150-200 hours and delivered over 3-6 weeks. Projects can be structured as focused audits or complete redesigns. Retainer engagements are not currently available.
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
              className="mt-8 p-6 sm:p-8 rounded-2xl"
              style={{
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <h3 
                className="mb-4"
                style={{
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#222222'
                }}
              >
                What You'll Receive
              </h3>
              <ul 
                style={{
                  fontSize: 'clamp(15px, 3.5vw, 16px)',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: '#505050',
                  listStyle: 'none',
                  padding: 0
                }}
              >
                <li style={{ marginBottom: '8px' }}>→ Written summary in Notion or Figma</li>
                <li style={{ marginBottom: '8px' }}>→ Prioritized action roadmap</li>
                <li style={{ marginBottom: '8px' }}>→ Annotated designs or wireframes (if applicable)</li>
                <li>→ 2 weeks of async support post-delivery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What's Different */}
        <div className="pb-24 sm:pb-36 relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px" 
            style={{ backgroundColor: '#E5E5E5' }}
          />
          
          <h2 
            className="text-center mb-16 sm:mb-24 pt-16 sm:pt-20"
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em'
            }}
          >
            What's Different
          </h2>

          <div className="space-y-8 sm:space-y-10 max-w-[640px] mx-auto">
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
        <div className="pb-24 sm:pb-36 relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px" 
            style={{ backgroundColor: '#E5E5E5' }}
          />
          
          <h2 
            className="text-center mb-16 sm:mb-24 pt-16 sm:pt-20"
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em'
            }}
          >
            Common Questions
          </h2>

          <div className="space-y-6 max-w-[640px] mx-auto">
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
                className="p-6 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  background: expandedFaq === index ? 'rgba(0, 0, 0, 0.02)' : 'rgba(0, 0, 0, 0.01)',
                  border: '1px solid rgba(0, 0, 0, 0.04)'
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
        <div className="pb-24 sm:pb-36 relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px" 
            style={{ backgroundColor: '#E5E5E5' }}
          />
          
          <h2 
            className="text-center mb-16 sm:mb-24 pt-16 sm:pt-20"
            style={{
              fontSize: 'clamp(24px, 6vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#222222',
              letterSpacing: '-0.01em'
            }}
          >
            This Is For You If
          </h2>

          <div className="space-y-8 sm:space-y-10 max-w-[640px] mx-auto">
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
        <div className="text-center pb-16 sm:pb-24">
          <div 
            className="inline-block p-8 sm:p-10 rounded-3xl mb-8 max-w-full"
            style={{
              background: 'rgba(0, 0, 0, 0.015)',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
          >
            <p 
              className="mb-6 sm:mb-8"
              style={{
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 500,
                lineHeight: 1.6,
                color: '#222222'
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
              className="mt-6 sm:mt-8 px-4"
              style={{
                fontSize: 'clamp(13px, 3vw, 14px)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#8A8A8A',
                maxWidth: '480px',
                margin: '24px auto 0'
              }}
            >
              30-minute intro call. Free. We'll discuss your product and whether an audit makes sense.
            </p>
          </div>
        </div>

        {/* About / Footer with Photo */}
        <div className="text-center py-16 sm:py-20 border-t" style={{ borderColor: '#E5E5E5' }}>
          <div className="flex flex-col items-center mb-8">
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
            className="mb-2"
            style={{
              fontSize: 'clamp(13px, 3vw, 14px)',
              fontWeight: 400,
              color: '#8A8A8A'
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
