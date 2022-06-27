import HelloProfile from './HelloProfile';
import InputNumber from './InputNumber';
import LastMessages from './LastMessages';
import LoggedSendButton from './LoggedSendButton';
import LoggedNavBar from './LoggedNavBar';
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
          <LoggedSendButton />
        </FlexContainer>
      </SendMessageContainer>
    </StyledWrap>
  </StyledLoggedHome>
);

export default LoggedHome;
