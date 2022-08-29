import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

type ProviderOptions = {
  message: {
    prefix: string
    phone: string
    textMessage: string
  }
  changeMessage: (newValue: { [key: string]: string}) => void
}
type EmptyObject = Record<string, never>

// export hook for using the context
const NumberContext = createContext<ProviderOptions | EmptyObject>({});
export const useNumberContext = () => useContext(NumberContext);

// React Component that wrap the components below it, and provide them the context
export const NumberProvider: React.FC = ({ children }) => {
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
    <NumberContext.Provider value={value}>
      {children}
    </NumberContext.Provider>
  );
};
