import { useEffect } from 'react';
import {
  StyledHome, Explain, StyledWrap,
} from './styles/Home.styled';
import NavBar from './HomeNavBar';
import SendMessage from './SendMessage';

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
        <SendMessage />
      </StyledWrap>
    </StyledHome>
  );
};

export default Home;
