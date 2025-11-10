import React from 'react'
import userImg from '../assets/user.png';
import robotImg from '../assets/robot.png';

const ChatMessage = ({message, sender}) => {
  return (
    <div>
      {sender === 'robot' && 
        <img src={robotImg} alt="robot" width='50' />
      }
      {message}
      {sender !== 'robot' && 
        <img src={userImg} alt="user" width='50' />
      }
    </div>
  )
}

export default ChatMessage
