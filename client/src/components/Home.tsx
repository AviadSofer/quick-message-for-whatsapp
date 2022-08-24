import {
  StyledHome, Explain, StyledWrap,
} from './styles/Home.styled';
import NavBar from './HomeNavBar';
import SendMessage from './SendMessage';
import Footer from './Footer';

const Home: React.FC = () => (
  <StyledHome>
    <StyledWrap>
      <NavBar />
      <Explain>שליחת הודעה בוואטספ בלי לשמור את המספר</Explain>
      <SendMessage />
    </StyledWrap>
    <Footer />
  </StyledHome>
);

export default Home;
