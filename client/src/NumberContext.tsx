import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

type ProviderOptions = {
    prefix: string
    phone: string
    message: string
    changePrefix: (num: string) => void
    changePhone: (num: string) => void
    changeMessage: (msg: string) => void
}

const NumberContext = createContext({});

export const useNumberContext = () => useContext(NumberContext);

// wrap the components below it, and provide them the context
export const NumberProvider: React.FC = ({ children }) => {
  const [prefix, setPrefix] = useState('972');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const providerOptions: ProviderOptions = {
    prefix,
    phone,
    message,
    changePrefix: (num: string) => setPrefix(num),
    changePhone: (num: string) => setPhone(num),
    changeMessage: (msg: string) => setMessage(msg),
  };

  // by default React re-rendering all the content, every change
  // with useMemo React will re-render the code inside it, only when the second argument will change
  const value = useMemo(() => providerOptions, [providerOptions]);

  return (
    <NumberContext.Provider value={value}>
      {children}
    </NumberContext.Provider>
  );
};
