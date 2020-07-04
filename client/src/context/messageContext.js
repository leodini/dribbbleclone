import React, { createContext, useState, useEffect } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (textMessage, type) => {
    const newMessage = {
      text: textMessage,
      type,
    };
    setMessages([...messages, newMessage]);
    setTimeout(() => {
      removeMessage(newMessage);
    }, 3000);
  };

  const removeMessage = (messageToRemove) => {
    setMessages(messages.filter((message) => message !== messageToRemove));
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage, removeMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
