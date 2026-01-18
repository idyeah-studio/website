import type { Conversation, UserProfile, EmptyStateButton, PlaceholderConfig } from './types';

// User Profile Configuration
export const userProfile: UserProfile = {
  name: 'Sarah Chen',
  role: 'Senior Developer',
  initials: 'S'
};

// Empty State Buttons
export const emptyStateButtons: EmptyStateButton[] = [
  { id: 'btn1', text: 'Analyze dependencies' },
  { id: 'btn2', text: 'Find business rules' },
  { id: 'btn3', text: 'Start conversion' }
];

// Placeholder Configuration (messageIndex is the displayed message count)
export const placeholderConfigs: PlaceholderConfig[] = [
  { messageIndex: 0, placeholder: "e.g., /legacy/wire-transfer/*" }, // Empty state
  { messageIndex: 2, placeholder: "e.g., /legacy/wire-transfer/*" }, // After MIRA asks for directory
  { messageIndex: 4, placeholder: "Ask about business rules or dependencies..." }, // After analysis results
  { messageIndex: 6, placeholder: "Choose your conversion target..." }, // After business rules shown
  { messageIndex: 8, placeholder: "Conversion starting..." }, // After conversion setup
  { messageIndex: 9, placeholder: "The conversion is in progress..." } // During progress
];

// Conversations Configuration
export const conversations: Conversation[] = [
  {
    id: 'conv1',
    title: 'Wire Transfer Modernization',
    isActive: true,
    messages: [
      {
        id: 'msg1',
        type: 'user',
        content: [
          { type: 'text', text: 'I need to modernize the wire transfer module. Can you analyze it?' }
        ],
        timestamp: new Date('2026-01-18T08:00:00')
      },
      {
        id: 'msg2',
        type: 'assistant',
        content: [
          { type: 'text', text: "I'd be happy to help you with that! Point me to the source directory and I'll generate a complete map of your wire transfer module." },
          { type: 'status', text: 'Running SOTERIA discovery agent...' }
        ],
        timestamp: new Date('2026-01-18T08:00:05')
      },
      {
        id: 'msg3',
        type: 'user',
        content: [
          { type: 'text', text: '/legacy/wire-transfer/*' }
        ],
        timestamp: new Date('2026-01-18T08:00:30')
      },
      {
        id: 'msg4',
        type: 'assistant',
        content: [
          { type: 'text', text: "Great! I've completed the analysis. Here's what I discovered in your codebase:" },
          { type: 'text', text: '127 programs across 340,847 lines of COBOL-85' },
          { type: 'text', text: '23 external interfaces (SWIFT, FedWire, ACH, internal ledger)' },
          { type: 'text', text: "4 missing copybooks detected — I'll need those to proceed" },
          { type: 'text', text: 'This looks like a solid wire transfer system! Would you like me to show you the dependency graph or dive into the business logic?' }
        ],
        timestamp: new Date('2026-01-18T08:01:00')
      },
      {
        id: 'msg5',
        type: 'user',
        content: [
          { type: 'text', text: 'What business rules are embedded in FEE-CALC-007?' }
        ],
        timestamp: new Date('2026-01-18T08:02:00')
      },
      {
        id: 'msg6',
        type: 'assistant',
        content: [
          { type: 'text', text: 'Excellent question! I found 7 distinct fee calculation rules embedded in FEE-CALC-007:' },
          {
            type: 'table',
            rows: [
              'Rule 1: Domestic < $10K → flat $15',
              'Rule 2: Domestic $10K-$100K → 0.15%',
              'Rule 3: Domestic > $100K → 0.10% (cap $500)',
              'Rule 4: International SWIFT → $45 + 0.20%',
              'Rule 5: Priority processing → +$25 surcharge',
              'Rule 6: VIP accounts (tier 3+) → 50% discount',
              'Rule 7: Weekend/holiday → +$10 (lines 847-892)'
            ]
          },
          { type: 'text', text: "These rules weren't documented anywhere, but I extracted them from the code! I'll make sure all of this business logic in the modernized version!" }
        ],
        timestamp: new Date('2026-01-18T08:02:30')
      },
      {
        id: 'msg7',
        type: 'user',
        content: [
          { type: 'text', text: 'Convert to Java Spring Boot, keep DB2, target Kubernetes' }
        ],
        timestamp: new Date('2026-01-18T08:03:00')
      },
      {
        id: 'msg8',
        type: 'assistant',
        content: [
          { type: 'text', text: 'Perfect choice! Let me create a conversion plan that works for your needs:' },
          { type: 'text', text: '✓ Target: Java Spring Boot microservices' },
          { type: 'text', text: '✓ Database: Maintain DB2 connectivity via JDBC' },
          { type: 'text', text: '✓ Deployment: Kubernetes-ready containers' },
          { type: 'text', text: '✓ Preserving all 7 business rules from FEE-CALC-007' },
          { type: 'text', text: "I'll make sure everything is thoroughly tested and documented. You can review the conversion anytime!" },
          { type: 'status', text: 'Starting conversion...' }
        ],
        timestamp: new Date('2026-01-18T08:03:15')
      },
      {
        id: 'msg9',
        type: 'assistant',
        content: [
          { type: 'text', text: "Great! The conversion is now underway. I'll keep you posted on the progress and notify you when it's complete." },
          {
            type: 'progress',
            label: 'Progress',
            percentage: 2,
            estimatedTime: '~36 hours'
          }
        ],
        timestamp: new Date('2026-01-18T08:03:20')
      }
    ],
    suggestionChips: [
      [], // No chips after first message
      [
        { id: 'chip1', text: '/legacy/wire-transfer/*' },
        { id: 'chip2', text: '/src/main/*' },
        { id: 'chip3', text: '/cobol/production/*' }
      ],
      [], // No chips after user provides path
      [
        { id: 'chip4', text: 'What business rules are embedded in FEE-CALC-007?' },
        { id: 'chip5', text: 'Show me the dependency graph' },
        { id: 'chip6', text: 'List all external interfaces' }
      ],
      [], // No chips after user asks question
      [
        { id: 'chip7', text: 'Convert to Java Spring Boot, keep DB2, target Kubernetes' },
        { id: 'chip8', text: 'Migrate to Node.js with PostgreSQL' },
        { id: 'chip9', text: 'Modernize to Python microservices' }
      ],
      [], // No chips after user chooses conversion
      [], // No chips during conversion status
      []  // No chips during progress
    ]
  },
  {
    id: 'conv2',
    title: 'Payment Gateway Analysis',
    isActive: false,
    messages: [],
    suggestionChips: []
  },
  {
    id: 'conv3',
    title: 'COBOL to Java Migration',
    isActive: false,
    messages: [],
    suggestionChips: []
  },
  {
    id: 'conv4',
    title: 'API Documentation Review',
    isActive: false,
    messages: [],
    suggestionChips: []
  }
];
