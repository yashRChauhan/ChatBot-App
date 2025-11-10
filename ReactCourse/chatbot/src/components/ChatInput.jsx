import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

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

  function SendMessage() {
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
    const response = getChatResponse(inputText);

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
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Send a message to the chatbot"
        size="30"
      />
      <button onClick={SendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
