import type { Conversation, EmptyStateButton } from './types';
import Message from './Message';
import ChatInput from './ChatInput';

interface ChatAreaProps {
  conversation: Conversation;
  emptyStateButtons: EmptyStateButton[];
  onNextMessage: () => void;
}

export default function ChatArea({ conversation, emptyStateButtons, onNextMessage }: ChatAreaProps) {
  const hasMessages = conversation.messages.length > 0;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Header */}
      <div
        style={{
          padding: '20px 32px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1a1a1a'
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
          paddingBottom: '100px',
          backgroundColor: '#1a1a1a'
        }}
      >
        {hasMessages ? (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {conversation.messages.map((message, index) => (
              <Message
                key={message.id}
                message={message}
                suggestionChips={conversation.suggestionChips[index]}
                onChipClick={onNextMessage}
              />
            ))}
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

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {emptyStateButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={onNextMessage}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
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
      <ChatInput onSend={onNextMessage} />
    </div>
  );
}
