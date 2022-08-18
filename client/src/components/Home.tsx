import {
  StyledHome, Explain, StyledWrap,
} from './styles/Home.styled';
import NavBar from './HomeNavBar';
import SendMessage from './SendMessage';

const Home: React.FC = () => (
  <StyledHome>
    <StyledWrap>
      <NavBar />
      <Explain>שליחת הודעה בוואטספ בלי לשמור את המספר</Explain>
      <SendMessage />
    </StyledWrap>
  </StyledHome>
);

export default Home;
