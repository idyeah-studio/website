import type { Message as MessageType, MessageContent } from './types';

interface MessageProps {
  message: MessageType;
  suggestionChips?: { id: string; text: string }[];
  onChipClick?: () => void;
}

export default function Message({ message, suggestionChips, onChipClick }: MessageProps) {
  const isUser = message.type === 'user';

  return (
    <div style={{ marginBottom: '24px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: isUser ? 'flex-end' : 'flex-start',
          gap: '12px',
          alignItems: 'flex-start'
        }}
      >
        {/* Avatar for assistant messages */}
        {!isUser && (
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
        )}

        {/* Message bubble */}
        <div
          style={{
            maxWidth: '70%',
            padding: '16px 20px',
            borderRadius: '16px',
            backgroundColor: isUser ? '#1e3a5f' : '#3d2f24',
            color: '#FFFFFF'
          }}
        >
          {message.content.map((content, index) => (
            <MessageContentRenderer key={index} content={content} />
          ))}
        </div>

        {/* Avatar for user messages */}
        {isUser && (
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#4B5563',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 600,
              flexShrink: 0
            }}
          >
            S
          </div>
        )}
      </div>

      {/* Suggestion chips */}
      {suggestionChips && suggestionChips.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '16px',
            flexWrap: 'wrap',
            marginLeft: isUser ? '0' : '44px'
          }}
        >
          {suggestionChips.map((chip) => (
            <button
              key={chip.id}
              onClick={onChipClick}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#D1D5DB',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
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
              {chip.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MessageContentRenderer({ content }: { content: MessageContent }) {
  switch (content.type) {
    case 'text':
      return (
        <p style={{ margin: '0 0 12px 0', lineHeight: '1.6', fontSize: '15px' }}>
          {content.text}
        </p>
      );

    case 'status':
      return (
        <p
          style={{
            margin: '12px 0',
            lineHeight: '1.6',
            fontSize: '15px',
            color: '#F59E0B',
            fontStyle: 'italic'
          }}
        >
          {content.text}
        </p>
      );

    case 'table':
      return (
        <div
          style={{
            margin: '16px 0',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}
        >
          {content.rows.map((row, index) => (
            <div
              key={index}
              style={{
                padding: '8px 0',
                borderBottom:
                  index < content.rows.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                fontSize: '14px',
                lineHeight: '1.5'
              }}
            >
              {row}
            </div>
          ))}
        </div>
      );

    case 'progress':
      return (
        <div style={{ margin: '16px 0' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              fontSize: '14px'
            }}
          >
            <span>{content.label}</span>
            <span>{content.percentage}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${content.percentage}%`,
                height: '100%',
                backgroundColor: '#F59E0B',
                borderRadius: '3px',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
          {content.estimatedTime && (
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              Estimated time remaining: {content.estimatedTime}
            </p>
          )}
        </div>
      );

    case 'loading':
      return (
        <div style={{ display: 'flex', gap: '6px', margin: '12px 0' }}>
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
              0%, 80%, 100% { opacity: 0.3; }
              40% { opacity: 1; }
            }
          `}</style>
        </div>
      );

    default:
      return null;
  }
}
