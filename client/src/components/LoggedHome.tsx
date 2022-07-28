import { useEffect } from 'react';
import HelloUser from './HelloUser';
import MessagesTable from './MessagesTable';
import LoggedNavBar from './LoggedNavBar';
import { StyledLoggedHome, StyledWrap } from './styles/LoggedHome.styled';
import SendMessage from './SendMessage';
import { MediumTitle } from './styles/Title.styled';

const LoggedHome: React.FC = () => {
  useEffect(() => {
    window.addEventListener('load', () => { // make the height static, useful with mobile keyboard
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  });

  return (
    <StyledLoggedHome>
      <StyledWrap>
        <LoggedNavBar />
        <HelloUser />
        <MessagesTable />
        <MediumTitle>תרצה לשלוח הודעה חדשה?</MediumTitle>
        <SendMessage />
      </StyledWrap>
    </StyledLoggedHome>
  );
};

export default LoggedHome;
