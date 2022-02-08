import { NumberProvider } from './NumberContext';
import { StyledApp } from './components/styles/App,styled';
import GlobalStyles from './components/styles/Global';
import Container from './components/Container';
import MessageView from './components/MessageView';

const App: React.FC = () => {
  return (
    <NumberProvider>
        <StyledApp>
          <GlobalStyles/>
          <Container/>
          <MessageView/>
        </StyledApp>
    </NumberProvider>
  )
}

export default App;
