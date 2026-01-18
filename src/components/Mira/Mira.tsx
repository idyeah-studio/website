import { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import { conversations, userProfile, emptyStateButtons } from './miraConfig';
import type { Conversation } from './types';

export default function Mira() {
  // Get the full conversation data
  const fullConversation = conversations.find((conv) => conv.isActive) || conversations[0];
  
  // State to track current message index (how many messages to show)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Create a partial conversation with only messages up to current index
  const displayConversation: Conversation = {
    ...fullConversation,
    messages: fullConversation.messages.slice(0, currentMessageIndex),
    suggestionChips: fullConversation.suggestionChips.slice(0, currentMessageIndex)
  };

  // Handler to progress to next message
  const handleNextMessage = () => {
    if (currentMessageIndex < fullConversation.messages.length) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#FFFFFF',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        overflow: 'hidden'
      }}
    >
      <Sidebar conversations={conversations} userProfile={userProfile} />
      <ChatArea 
        conversation={displayConversation} 
        emptyStateButtons={emptyStateButtons}
        onNextMessage={handleNextMessage}
      />
    </div>
  );
}
