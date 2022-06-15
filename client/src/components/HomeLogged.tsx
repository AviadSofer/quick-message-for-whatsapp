import HelloProfile from './HelloProfile';
import InputNumber from './InputNumber';
import LastMessages from './LastMessages';
import LoggedNavBar from './LoggedNavBar';
import SendButton from './SendButton';
import { FlexContainer, SendMessageContainer } from './styles/Home.styled';
import { StyledHomeLogged, StyledWrap } from './styles/HomeLogged.styled';
import WriteMessage from './WriteMessage';

const HomeLogged: React.FC = () => (
  <StyledHomeLogged>
    <StyledWrap>
      <LoggedNavBar />
      <HelloProfile />
      <LastMessages />
      <SendMessageContainer>
        <InputNumber />
        <FlexContainer>
          <WriteMessage />
          <SendButton />
        </FlexContainer>
      </SendMessageContainer>
    </StyledWrap>
  </StyledHomeLogged>
);

export default HomeLogged;
