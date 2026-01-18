import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import { conversations, userProfile, emptyStateButtons, placeholderConfigs } from './miraConfig';
import type { Conversation } from './types';

export default function Mira() {
  // Get the full conversation data
  const fullConversation = conversations.find((conv) => conv.isActive) || conversations[0];
  
  // State to track current message index (how many messages to show)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Create a partial conversation with only messages up to current index
  const displayConversation: Conversation = {
    ...fullConversation,
    messages: fullConversation.messages.slice(0, currentMessageIndex),
    suggestionChips: fullConversation.suggestionChips.slice(0, currentMessageIndex)
  };

  // Auto-advance to next message after user action with typing animation
  useEffect(() => {
    if (isTyping && currentMessageIndex < fullConversation.messages.length) {
      // Show typing indicator for 1.5 seconds
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
        setIsTyping(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isTyping, currentMessageIndex, fullConversation.messages.length]);

  // Auto-trigger responses
  useEffect(() => {
    if (currentMessageIndex > 0 && currentMessageIndex < fullConversation.messages.length) {
      const currentMessage = fullConversation.messages[currentMessageIndex - 1];
      const nextMessage = fullConversation.messages[currentMessageIndex];
      
      // Check if we're in auto mode (after "Start conversion" has been said)
      const hasStartConversion = fullConversation.messages
        .slice(0, currentMessageIndex)
        .some(msg => msg.type === 'user' && 
          msg.content.some(c => c.type === 'text' && c.text.toLowerCase().includes('start conversion')));
      
      // Auto-trigger MIRA response after user message (always after 2 seconds)
      if (currentMessage.type === 'user' && nextMessage.type === 'assistant') {
        const timer = setTimeout(() => {
          setIsTyping(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
      
      // Auto-continue only if we're past "Start conversion"
      if (hasStartConversion && currentMessage.type === 'assistant' && nextMessage && !isTyping) {
        const timer = setTimeout(() => {
          if (nextMessage.type === 'user') {
            setCurrentMessageIndex(currentMessageIndex + 1);
          } else if (nextMessage.type === 'assistant') {
            // For consecutive assistant messages, trigger typing
            setIsTyping(true);
          }
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentMessageIndex, fullConversation.messages, isTyping]);

  // Handler to progress to next message
  const handleNextMessage = () => {
    if (currentMessageIndex < fullConversation.messages.length) {
      const nextMessage = fullConversation.messages[currentMessageIndex];
      
      // If next message is from user, show it immediately
      if (nextMessage.type === 'user') {
        setCurrentMessageIndex(currentMessageIndex + 1);
      } 
      // If next message is from assistant, show typing first
      else {
        setIsTyping(true);
      }
    }
  };

  return (
    <>
      <style>{`
        @keyframes messageSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes chipPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
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
          isTyping={isTyping}
          placeholderConfigs={placeholderConfigs}
        />
      </div>
    </>
  );
}
