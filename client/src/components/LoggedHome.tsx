import HelloProfile from './HelloProfile';
import InputNumber from './InputNumber';
import LastMessages from './LastMessages';
import LoggedNavBar from './LoggedNavBar';
import SendButton from './SendButton';
import { FlexContainer, SendMessageContainer } from './styles/Home.styled';
import { StyledLoggedHome, StyledWrap } from './styles/LoggedHome.styled';
import WriteMessage from './WriteMessage';

const LoggedHome: React.FC = () => (
  <StyledLoggedHome>
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
  </StyledLoggedHome>
);

export default LoggedHome;
