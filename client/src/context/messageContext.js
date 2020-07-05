import React, { createContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const addMessage = (textMessage, type) => {
    const newMessage = {
      text: textMessage,
      type,
    };
    setMessage(newMessage);
    setTimeout(() => {
      removeMessage();
    }, 1500);
  };

  const removeMessage = () => {
    setMessage(null);
  };

  return (
    <MessageContext.Provider value={{ message, addMessage, removeMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
