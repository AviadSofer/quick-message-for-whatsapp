import { IconButton } from '@mui/material';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import deleteMessageById from '../api/deleteMessageById';
import { useMessage } from '../contexts/Message';
import {
  MessageText, Phone, TDContainer, TD,
} from './styles/MessagesTable.styled';
import { useSavedMessages } from '../contexts/SavedMessages';
import Icon from './Icon';

const MessagesTableBody: React.FC = () => {
  const { t } = useTranslation();

  const { changeMessage } = useMessage();

  const { savedMessages, setSavedMessages } = useSavedMessages();

  const deleteMessage = async (_id: string) => {
    await deleteMessageById(_id);
    setSavedMessages(
      [...savedMessages]
        .filter((someMessage: { _id: string }) => someMessage._id !== _id),
    );
  };

  const sendMessage = (phoneNumber: string, textMessage: string) => {
    changeMessage({
      prefix: `${phoneNumber.slice(1, 4)}`,
      phone: `${phoneNumber.slice(5, 7)}${phoneNumber.slice(8, 11)}${phoneNumber.slice(12, 16)}`,
      textMessage,
    });
  };

  if (savedMessages.length < 1) {
    return (
      <tbody>
        <tr>
          <TD colSpan={3}>
            <TDContainer>
              {t('MessageTable.noMessagesYet')}
            </TDContainer>
          </TD>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {savedMessages.map(({
        _id, date, phoneNumber, textMessage,
      }) => (
        <tr key={_id}>
          <TD>
            {`${new Date(date).toLocaleDateString()} 
            ${new Date(date).toLocaleTimeString('he-IL', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        })}`}
          </TD>
          <TD>
            <Phone>{phoneNumber}</Phone>
          </TD>
          <TD>
            <TDContainer>
              <MessageText>{textMessage || '—'}</MessageText>
              <IconButton onClick={() => deleteMessage(_id)}>
                <Icon src={<DeleteIcon />} size="0.7" />
              </IconButton>
              <IconButton onClick={() => sendMessage(phoneNumber, textMessage)}>
                <Icon src={<CallReceivedIcon />} size="0.7" />
              </IconButton>
            </TDContainer>
          </TD>
        </tr>
      ))}
    </tbody>
  );
};

export default MessagesTableBody;
