import WhatsappUi from 'react-whatsapp-styled-ui-hebrew';
import { StyledMessageView } from './styles/MessageView.styled';
import { useNumberContext } from '../NumberContext';

const MessageView: React.FC = () => {
  const { prefix, phone, message } = useNumberContext();

  return (
    <StyledMessageView>
      <WhatsappUi size={60} phoneNumber={`${prefix}${phone}`} message={message} />
    </StyledMessageView>
  );
};

export default MessageView;
