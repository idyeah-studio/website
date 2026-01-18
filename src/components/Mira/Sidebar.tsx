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
        backgroundColor: '#2a2a2a',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}
    >
      {/* Header */}
      <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '0.5px'
            }}
          >
            MIRα
          </h1>
        </div>
        <p style={{ fontSize: '13px', color: '#9CA3AF', margin: 0 }}>powered by Ionate</p>
      </div>

      {/* Conversations List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
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
          gap: '12px'
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
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
