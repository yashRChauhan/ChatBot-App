import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "../assets/styles/ChatInput.css"

const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = useState("");

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyBzPqYqLHZDvgadbFyw764woE7hDF6VzkI",
  });

  async function getChatResponse(userInput) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userInput,
    });
    return response.text;
  }

  async function SendMessage() {
    const newMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newMessage);

    // const response, get response
    const response = await getChatResponse(inputText);

    setChatMessages([
      ...newMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="input-container">
      <input
        className="chat-input"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Send a message to the chatbot"
        size="30"
      />
      <button className="send-button" onClick={SendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
