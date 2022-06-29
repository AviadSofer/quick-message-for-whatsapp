import { useEffect, useState } from 'react';
import {
  StyledHome, Explain, FlexContainer, StyledWrap, SendMessageContainer,
} from './styles/Home.styled';
import NavBar from './HomeNavBar';
import InputNumber from './InputNumber';
import { ErrorMessage } from './styles/Login.styled';
import WriteMessage from './WriteMessage';
import SendButton from './SendButton';

const Home: React.FC = () => {
  const [showErr, setShowErr] = useState(0);
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
        <SendMessageContainer>
          <InputNumber />
          <ErrorMessage showErr={showErr}>
            מספר קצר מדי :(
            מספר תקין הוא משהו בסגנון של 054-123-4567
          </ErrorMessage>
          <FlexContainer>
            <WriteMessage />
            <SendButton setShowErr={setShowErr} />
          </FlexContainer>
        </SendMessageContainer>
      </StyledWrap>
    </StyledHome>
  );
};

export default Home;
