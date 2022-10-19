import WhatsappUi from 'react-whatsapp-styled-ui-hebrew';
import { useTheme } from 'styled-components';
import { EnglishWhatsappUi, StyledMessageView } from './styles/MessageView.styled';
import { useMessage } from '../contexts/Message';

const MessageView: React.FC = () => {
  const { i18n } = useTheme();

  const { message } = useMessage();
  const { prefix, phone, textMessage } = message;

  return (
    <StyledMessageView>
      {i18n.language === 'he'
        ? <WhatsappUi size={60} phoneNumber={`${prefix}${phone}`} message={textMessage} />
        : <EnglishWhatsappUi size={60} phoneNumber={`${prefix}${phone}`} message={textMessage} />}
    </StyledMessageView>
  );
};

export default MessageView;
