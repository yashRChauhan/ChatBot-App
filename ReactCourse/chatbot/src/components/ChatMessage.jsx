import React from "react";
import userImg from "../assets/user.png";
import robotImg from "../assets/robot.png";
import "../assets/styles/ChatMessage.css";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ message, sender }) => {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-bot"}
    >
      {sender === "robot" && (
        <>
          <img src={robotImg} alt="robot" width="50" />
          <ReactMarkdown>
            <div className="chat-message-text">{message}</div>
          </ReactMarkdown>
        </>
      )}
      {sender !== "robot" && (
        <>
          <div className="chat-message-text">{message}</div>
          <img src={userImg} alt="user" width="50" />
        </>
      )}
    </div>
  );
};

export default ChatMessage;
