import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import fetchData from '../api/fetchData';

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

  useEffect(() => {
    (async () => {
      const messagesList = await fetchData('/api/get-messages');
      setSavedMessages(messagesList);
    })();
  }, []);

  const value = useMemo(() => ({ savedMessages, setSavedMessages }), [savedMessages]);

  return (
    <SavedMessagesContext.Provider value={value}>
      {children}
    </SavedMessagesContext.Provider>
  );
};

export { SavedMessages, useSavedMessages };
