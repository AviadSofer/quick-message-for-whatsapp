import { StyledMessageView } from './styles/MessageView.styled';
import { useNumberContext } from '../NumberContext';
import WhatsappUi from 'react-whatsapp-styled-ui-hebrew';

const MessageView: React.FC = () => {
  const { prefix, phone, message } = useNumberContext();

  return (
      <StyledMessageView>
        <WhatsappUi size={70} phoneNumber={`${prefix}${phone}`} message={message}/>
      </StyledMessageView>
  )
}

export default MessageView;
