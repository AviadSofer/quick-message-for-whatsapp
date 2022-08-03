import { IconButton } from '@mui/material';
import deleteMessageById from '../api/deleteMessageById';
import { useNumberContext } from '../NumberContext';
import {
  ArrowDown, Delete, MessageText, Phone, TDContainer, TD,
} from './styles/MessagesTable.styled';

interface Props {
    data: never[]
    setData: (newData: never[]) => void
}

const MessagesTableBody: React.FC<Props> = ({ data, setData }) => {
  const { changePrefix, changePhone, changeMessage } = useNumberContext();
  const deleteMessage = async (_id: string) => {
    await deleteMessageById(_id);
    setData([...data].filter((message: { _id: string }) => message._id !== _id));
  };

  const sendMessage = (phoneNumber: string, textMessage: string) => {
    changePrefix(`${phoneNumber.slice(1, 4)}`);
    changePhone(`${phoneNumber.slice(5, 7)}${phoneNumber.slice(8, 11)}${phoneNumber.slice(12, 16)}`);
    changeMessage(textMessage);
  };

  if (data.length < 1) {
    return (
      <tbody>
        <tr>
          <TD colSpan={3}>
            <TDContainer>
              אין הודעות עדיין
            </TDContainer>
          </TD>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map(({
        _id, date, phoneNumber, textMessage,
      }) => (
        <tr key={_id}>
          <TD>
            {`${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString('he-IL', {
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
                <Delete />
              </IconButton>
              <IconButton onClick={() => sendMessage(phoneNumber, textMessage)}>
                <ArrowDown />
              </IconButton>
            </TDContainer>
          </TD>
        </tr>
      ))}
    </tbody>
  );
};

export default MessagesTableBody;
