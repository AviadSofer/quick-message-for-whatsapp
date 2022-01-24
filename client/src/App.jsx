import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NumberProvider } from './NumberContext.js';
import Container from './components/Container';
import MassageView from './components/MassageView';
import { StyledApp } from './components/styles/App,styled';
import GlobalStyles from './components/styles/Global';
import theme from './components/styles/theme';

function App() {
  const [prefix, setPrefix] = useState('972');
  const [phone, setPhone] = useState('');
  const [massage, setMassage] = useState('')

  const providerOptions = {
    prefix,
    phone,
    massage,
    changePrefix: (num) => setPrefix(num),
    changePhone: (num) => setPhone(num),
    changeMassage: (value) => setMassage(value)
  }

  return (
    <ThemeProvider theme={theme}>
    <NumberProvider value={providerOptions}>
      <StyledApp>
        <GlobalStyles/>
        <Container/>
        <MassageView/>
      </StyledApp>
    </NumberProvider>
    </ThemeProvider>
  )
}

export default App;
