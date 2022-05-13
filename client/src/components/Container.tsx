import { useEffect } from 'react';
import {
  StyledContainer, Explain, FlexContainer, StyledWrap, SendMessageContainer,
} from './styles/Container.styled';
import NavBar from './NavBar';
import InputNumber from './InputNumber';
import WriteMessage from './WriteMessage';
import SendButton from './SendButton';

const Container: React.FC = () => {
  useEffect(() => {
    window.addEventListener('load', () => { // make the height static, useful with mobile keyboard
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  });

  return (
    <StyledContainer>
      <StyledWrap>
        <NavBar />
        <Explain>שליחת הודעה בוואטספ בלי לשמור את המספר</Explain>
        <SendMessageContainer>
          <InputNumber />
          <FlexContainer>
            <WriteMessage />
            <SendButton />
          </FlexContainer>
        </SendMessageContainer>
      </StyledWrap>
    </StyledContainer>
  );
};

export default Container;
