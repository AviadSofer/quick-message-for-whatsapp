import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';

interface ThemeStore {
  isDarkMode: boolean,
  switchTheme: () => void,
}

const ThemeContext = createContext<Record<string, never> | ThemeStore>({});
const useThemeStore = () => useContext(ThemeContext);

const ThemeStore: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('isDarkMode', 'true');
    } else {
      localStorage.removeItem('isDarkMode');
    }
  }, [isDarkMode]);

  const switchTheme = () => setIsDarkMode(!isDarkMode);

  const themeStore = useMemo(() => ({ isDarkMode, switchTheme }), [isDarkMode]);

  return (
    <ThemeContext.Provider value={themeStore}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, useThemeStore };
