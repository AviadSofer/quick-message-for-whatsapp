import WhatsappUi from 'react-whatsapp-styled-ui-hebrew';
import StyledMessageView from './styles/MessageView.styled';
import { useMessage } from '../contexts/Message';

const MessageView: React.FC = () => {
  const { message } = useMessage();
  const { prefix, phone, textMessage } = message;

  return (
    <StyledMessageView>
      <WhatsappUi size={60} phoneNumber={`${prefix}${phone}`} message={textMessage} />
    </StyledMessageView>
  );
};

export default MessageView;
