import { useNumberContext } from '../NumberContext';
import StyledInput from './styles/TextField.styled';

const WriteMessage: React.FC = () => {
  const { message, changeMessage } = useNumberContext();

  return (
    <StyledInput
      value={message}
      onChange={(e) => changeMessage(e.target.value)}
      placeholder="הודעה"
      width="70%"
    />
  );
};

export default WriteMessage;
