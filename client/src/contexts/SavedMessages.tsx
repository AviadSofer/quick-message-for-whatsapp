import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

interface Message {
  _id: string,
  date: string,
  userName: string,
  phoneNumber: string,
  textMessage: string
}

interface ProviderOptions {
  savedMessages: Message[]
  setSavedMessages: (newMessages: Message[]) => void
}

// hook for using the context
const SavedMessagesContext = createContext<Record<string, never> | ProviderOptions>({});
const useSavedMessages = () => useContext(SavedMessagesContext);

// react component that wrap the components below it, and provide them the context
const SavedMessages: React.FC = ({ children }) => {
  const [savedMessages, setSavedMessages] = useState<Message[]>([]);

  const value = useMemo(() => ({ savedMessages, setSavedMessages }), [savedMessages]);

  return (
    <SavedMessagesContext.Provider value={value}>
      {children}
    </SavedMessagesContext.Provider>
  );
};

export { SavedMessages, useSavedMessages };
