import WhatsappUi from 'react-whatsapp-styled-ui-hebrew';
import StyledMessageView from './styles/MessageView.styled';
import { useMessageContext } from '../contexts/Message';

const MessageView: React.FC = () => {
  const { message } = useMessageContext();
  const { prefix, phone, textMessage } = message;

  return (
    <StyledMessageView>
      <WhatsappUi size={60} phoneNumber={`${prefix}${phone}`} message={textMessage} />
    </StyledMessageView>
  );
};

export default MessageView;
