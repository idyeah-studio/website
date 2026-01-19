import type { Conversation, UserProfile } from './types';

interface SidebarProps {
  conversations: Conversation[];
  userProfile: UserProfile;
}

export default function Sidebar({ conversations, userProfile }: SidebarProps) {
  return (
    <div
      style={{
        width: '300px',
        height: '100vh',
        backgroundColor: '#1e1e1e',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}
    >
      {/* Header */}
      <div style={{ padding: '24px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="/mira-logo.png" 
            alt="MIRA" 
            style={{ 
              height: '32px',
              width: 'auto'
            }} 
          />
          <div style={{ 
            width: '1px', 
            height: '20px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)' 
          }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>powered by</p>
            <img 
              src="/io-symbol.png" 
              alt="Ionate" 
              style={{ 
                height: '40px',
                width: 'auto'
              }} 
            />
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingTop: '12px' }}>
        <h3
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#6B7280',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '12px'
          }}
        >
          Recent Conversations
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {conversations.map((conv) => (
            <div
              key={conv.id}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: conv.isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!conv.isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!conv.isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  marginBottom: '4px'
                }}
              >
                {conv.title}
              </div>
              {conv.isActive && (
                <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Active now</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div
        style={{
          padding: '16px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          height: '72px',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#4B5563',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            flexShrink: 0
          }}
        >
          {userProfile.initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {userProfile.name}
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#9CA3AF',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {userProfile.role}
          </div>
        </div>
        <button
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#9CA3AF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 15a3 3 0 100-6 3 3 0 000 6z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
