import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

interface ProviderOptions {
  message: {
    prefix: string
    phone: string
    textMessage: string
  }
  changeMessage: (newValue: { [key: string]: string}) => void
}

// export hook for using the context
const MessageContext = createContext<Record<string, never> | ProviderOptions>({});
const useMessageContext = () => useContext(MessageContext);

// react component that wrap the components below it, and provide them the context
const Message: React.FC = ({ children }) => {
  const [message, setMessage] = useState({
    prefix: '972',
    phone: '',
    textMessage: '',
  });

  const changeMessage = (newValue: { [key: string]: string }) => {
    setMessage((state) => ({
      ...state,
      ...newValue,
    }));
  };

  const value = useMemo(() => ({ message, changeMessage }), [message]);

  return (
    <MessageContext.Provider value={value}>
      {children}
    </MessageContext.Provider>
  );
};

export { useMessageContext, Message };
