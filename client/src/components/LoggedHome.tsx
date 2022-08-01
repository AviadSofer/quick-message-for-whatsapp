import { useEffect, useState } from 'react';
import HelloUser from './HelloUser';
import MessagesTable from './MessagesTable';
import LoggedNavBar from './LoggedNavBar';
import { StyledLoggedHome, StyledModal, StyledWrap } from './styles/LoggedHome.styled';
import SendMessage from './SendMessage';
import { MediumTitle } from './styles/Title.styled';

const LoggedHome: React.FC = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    window.addEventListener('load', () => { // make the height static, useful with mobile keyboard
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  });
  const handleModal = () => setModal(!modal);

  return (
    <StyledLoggedHome>
      <StyledWrap>
        <LoggedNavBar handleModal={handleModal} />
        <StyledModal open={modal} onClose={handleModal}>
          <MessagesTable />
        </StyledModal>
        <HelloUser />
        <MediumTitle>
          קוויק-וואטספ זו אפליקציה חופשית, שכתובה בקוד פתוח,
          ועכשיו כשנרשמת, ההודעות האחרונות ששלחת נמצאות בכפתור למעלה&#128512;
        </MediumTitle>
        <MediumTitle>תרצה לשלוח הודעה חדשה?</MediumTitle>
        <SendMessage />
      </StyledWrap>
    </StyledLoggedHome>
  );
};

export default LoggedHome;
