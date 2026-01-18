import type { Conversation, EmptyStateButton, PlaceholderConfig } from './types';
import Message from './Message';
import ChatInput from './ChatInput';

interface ChatAreaProps {
  conversation: Conversation;
  emptyStateButtons: EmptyStateButton[];
  onNextMessage: () => void;
  isTyping: boolean;
  placeholderConfigs: PlaceholderConfig[];
}

export default function ChatArea({ conversation, emptyStateButtons, onNextMessage, isTyping, placeholderConfigs }: ChatAreaProps) {
  const hasMessages = conversation.messages.length > 0;
  
  // Determine placeholder from config based on current message count
  const getPlaceholder = () => {
    const messageCount = conversation.messages.length;
    
    // Find the placeholder config for current state
    // Use the highest matching messageIndex that's <= current count
    const matchingConfigs = placeholderConfigs
      .filter(config => config.messageIndex <= messageCount)
      .sort((a, b) => b.messageIndex - a.messageIndex);
    
    if (matchingConfigs.length > 0) {
      return matchingConfigs[0].placeholder;
    }
    
    return "Ask me anything about your codebase...";
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {/* Background gradient and geometric shapes */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.02) 0%, transparent 50%), linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {/* Geometric shapes */}
        <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.03 }}>
          {/* Curved lines */}
          <path d="M0,200 Q300,100 600,200 T1200,200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
          <path d="M0,400 Q400,300 800,400 T1600,400" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          
          {/* Circles */}
          <circle cx="15%" cy="20%" r="120" stroke="rgba(217,119,6,0.4)" strokeWidth="1" fill="none" />
          <circle cx="85%" cy="75%" r="80" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" />
          
          {/* Grid lines - subtle */}
          <line x1="0" y1="33%" x2="100%" y2="33%" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <line x1="0" y1="66%" x2="100%" y2="66%" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        </svg>
      </div>
      {/* Header */}
      <div
        style={{
          padding: '20px 32px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
          {conversation.title}
        </h2>

        <div style={{ display: 'flex', gap: '12px' }}>
          {/* Share Icon */}
          <button
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'transparent',
              color: '#9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
              <path d="M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          {/* Menu Icon */}
          <button
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'transparent',
              color: '#9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="12" cy="6" r="1.5" fill="currentColor" />
              <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages or Empty State */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: hasMessages ? '32px' : '0',
          paddingBottom: hasMessages ? '120px' : '0',
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1
        }}
      >
        {hasMessages ? (
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {conversation.messages.map((message, index) => (
              <Message
                key={message.id}
                message={message}
                suggestionChips={conversation.suggestionChips[index]}
                onChipClick={onNextMessage}
              />
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ marginBottom: '24px', animation: 'messageSlideIn 0.3s ease-out' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#D97706',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontWeight: 600,
                      flexShrink: 0
                    }}
                  >
                    M
                  </div>
                  
                  {/* Typing bubble */}
                  <div
                    style={{
                      padding: '16px 20px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(217, 119, 6, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(217, 119, 6, 0.3)',
                      boxShadow: '0 4px 6px rgba(217, 119, 6, 0.1)',
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center'
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#F59E0B',
                          animation: `loading 1.4s infinite ${i * 0.2}s`
                        }}
                      />
                    ))}
                    <style>{`
                      @keyframes loading {
                        0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
                        40% { opacity: 1; transform: translateY(-4px); }
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px'
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '16px',
                textAlign: 'center'
              }}
            >
              Hello. I'm MIRA.
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#9CA3AF',
                marginBottom: '48px',
                textAlign: 'center',
                maxWidth: '600px'
              }}
            >
              Point me to your legacy codebase and I'll help you understand it.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {emptyStateButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={(e) => {
                    e.currentTarget.style.animation = 'chipPulse 0.3s ease-out';
                    setTimeout(() => {
                      onNextMessage();
                    }, 150);
                  }}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#E5E7EB',
                    fontSize: '15px',
                    fontWeight: 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <ChatInput onSend={onNextMessage} placeholder={getPlaceholder()} />
    </div>
  );
}
