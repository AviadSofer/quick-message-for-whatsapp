import { useState } from 'react';
import LoggedMainText from './LoggedMainText';
import MessagesTable from './MessagesTable';
import LoggedNavBar from './LoggedNavBar';
import {
  ModalWrap, StyledLoggedHome, StyledModal, StyledWrap,
} from './styles/LoggedHome.styled';
import SendMessage from './SendMessage';
import Footer from './Footer';
import { SavedMessages } from '../contexts/SavedMessages';

const LoggedHome: React.FC = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

  return (
    <SavedMessages>
      <StyledLoggedHome>
        <StyledWrap>
          <LoggedNavBar handleModal={handleModal} />
          <StyledModal open={modal} onClose={handleModal}>
            <ModalWrap>
              <MessagesTable />
            </ModalWrap>
          </StyledModal>
          <LoggedMainText />
          <SendMessage />
        </StyledWrap>
        <Footer />
      </StyledLoggedHome>
    </SavedMessages>
  );
};

export default LoggedHome;
