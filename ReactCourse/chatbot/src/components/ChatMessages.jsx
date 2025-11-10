import React from 'react'
import ChatMessage from './ChatMessage';

const ChatMessages = ({chatMessages, setChatMessages}) => {
  return (
    <div>
      {chatMessages.map(msg => {
        return (
            <ChatMessage
                message={msg.message}
                sender={msg.sender}
                key={msg.id}
            />
        )
      })}
    </div>
  )
}

export default ChatMessages
