import React, { createContext, useContext, useState } from "react"

type ProviderOptions = {
    prefix: string
    phone: string
    message: string
    changePrefix: (n: string) => void
    changePhone: (n: string) => void
    changeMessage: (n: string) => void
}

const NumberContext = createContext<any>({});

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
      changeMessage: (value: string) => setMessage(value)
    }

    return (
        <NumberContext.Provider value={providerOptions}>
            {children}
        </NumberContext.Provider>
    )
}