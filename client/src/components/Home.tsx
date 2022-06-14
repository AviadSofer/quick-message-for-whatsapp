import { useEffect } from 'react';
import {
  StyledHome, Explain, FlexContainer, StyledWrap, SendMessageContainer,
} from './styles/Home.styled';
import NavBar from './NavBar';
import InputNumber from './InputNumber';
import WriteMessage from './WriteMessage';
import SendButton from './SendButton';
import LastMessages from './LastMessages';

const Home: React.FC = () => {
  useEffect(() => {
    window.addEventListener('load', () => { // make the height static, useful with mobile keyboard
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  });

  return (
    <StyledHome>
      <StyledWrap>
        <NavBar />
        <Explain>שליחת הודעה בוואטספ בלי לשמור את המספר</Explain>
        <LastMessages />
        <SendMessageContainer>
          <InputNumber />
          <FlexContainer>
            <WriteMessage />
            <SendButton />
          </FlexContainer>
        </SendMessageContainer>
      </StyledWrap>
    </StyledHome>
  );
};

export default Home;
