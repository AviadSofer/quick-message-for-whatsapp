import { ThemeProvider } from 'styled-components';
import theme from './components/styles/theme';
import { NumberProvider } from './NumberContext';
import { StyledApp } from './components/styles/App,styled';
import GlobalStyles from './components/styles/Global';
import Container from './components/Container';
import MessageView from './components/MessageView';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <NumberProvider>
        <StyledApp>
          <GlobalStyles/>
          <Container/>
          <MessageView/>
        </StyledApp>
    </NumberProvider>
    </ThemeProvider>
  )
}

export default App;
