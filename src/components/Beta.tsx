import { useState, useEffect } from 'react';

export default function Beta() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Beyond the Ordinary',
      subtitle: 'Strategic design that elevates your brand and product.',
      cta: 'Start Your Journey',
      ctaLink: 'https://calendly.com/vishal-idyeah/30min',
      background: '#f5f5f5'
    },
    {
      id: 2,
      title: 'Design for the Real World',
      subtitle: 'Clarity that ships. Strategy that scales.',
      cta: 'Book Your Audit',
      ctaLink: 'https://calendly.com/vishal-idyeah/30min',
      background: '#e8e8e8'
    },
    {
      id: 3,
      title: 'Where Craft Meets Velocity',
      subtitle: 'AI-assisted workflows for founders who move fast.',
      cta: 'Learn More',
      ctaLink: 'https://calendly.com/vishal-idyeah/30min',
      background: '#ffffff'
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <style>{`
        body { margin: 0 !important; padding: 0 !important; overflow-x: hidden !important; }
        #root { max-width: none !important; padding: 0 !important; margin: 0 !important; }
      `}</style>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
          width: '100%',
          margin: 0,
          padding: 0
        }}
      >
      {/* Thin Promotional Top Bar */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#000000',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
          zIndex: 20
        }}
      >
        <span
          style={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '0.01em'
          }}
        >
          Ship designs 3x faster → The AI prompt playbook for design leaders.
        </span>
        <a
          href="https://idyeah.gumroad.com/l/design-ai-alchemy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#ffffff',
            textDecoration: 'underline',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Get it now!
        </a>
      </div>

      {/* Hero Section with Carousel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '700px',
          overflow: 'hidden'
        }}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              pointerEvents: currentSlide === index ? 'auto' : 'none'
            }}
          >
            {/* Background - light gray blending to image */}
            {slide.id === 1 ? (
              <>
                {/* Full-width image background */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/hero-slide-1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                {/* Gradient overlay - blends from solid gray to transparent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, #f5f5f5 0%, #f5f5f5 20%, rgba(245, 245, 245, 0.7) 45%, rgba(245, 245, 245, 0.3) 55%, transparent 70%)'
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: slide.background
                }}
              />
            )}

            {/* Content Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
                padding: '0 80px',
                zIndex: 1
              }}
            >
              {/* Left Side - Text Content */}
              <div
                style={{
                  textAlign: 'left',
                  maxWidth: '500px'
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    fontWeight: 400,
                    lineHeight: 1.15,
                    color: '#000000',
                    letterSpacing: '-0.02em',
                    marginBottom: '24px'
                  }}
                >
                  {slide.title}
                </h1>

                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: '#333333',
                    marginBottom: '40px',
                    maxWidth: '420px'
                  }}
                >
                  {slide.subtitle}
                </p>

                <a
                  href={slide.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    color: '#000000',
                    padding: '14px 32px',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'all 0.2s ease',
                    backgroundColor: 'transparent',
                    border: '1.5px solid #000000',
                    borderRadius: '24px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#000000';
                  }}
                >
                  {slide.cta}
                </a>
              </div>

              {/* Right Side - Empty space for image */}
              <div></div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 10
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: currentSlide === index ? '#000000' : '#cccccc',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
