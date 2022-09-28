import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../static/theme';
import { useThemeStore } from './ThemeStore';
import GlobalStyles from '../components/styles/Global';

const Theme: React.FC = ({ children }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
