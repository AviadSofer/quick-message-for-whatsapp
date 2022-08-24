import { useState } from 'react';
import HelloUser from './HelloUser';
import MessagesTable from './MessagesTable';
import LoggedNavBar from './LoggedNavBar';
import {
  ModalWrap, StyledLoggedHome, StyledModal, StyledWrap,
} from './styles/LoggedHome.styled';
import SendMessage from './SendMessage';
import { MediumTitle } from './styles/Title.styled';
import Footer from './Footer';

const LoggedHome: React.FC = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);

  return (
    <StyledLoggedHome>
      <StyledWrap>
        <LoggedNavBar handleModal={handleModal} />
        <StyledModal open={modal} onClose={handleModal}>
          <ModalWrap>
            <MessagesTable />
          </ModalWrap>
        </StyledModal>
        <HelloUser />
        <MediumTitle>
          קוויק-וואטספ זו אפליקציה חופשית, שכתובה בקוד פתוח,
          ועכשיו כשנרשמת, ההודעות האחרונות ששלחת נמצאות בכפתור למעלה&#128512;
        </MediumTitle>
        <MediumTitle>תרצה לשלוח הודעה חדשה?</MediumTitle>
        <SendMessage />
      </StyledWrap>
      <Footer />
    </StyledLoggedHome>
  );
};

export default LoggedHome;
