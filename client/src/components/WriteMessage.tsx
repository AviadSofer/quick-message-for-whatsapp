import { useNumberContext } from '../NumberContext';
import { StyledTextField } from './styles/TextField.styled';

const WriteMessage: React.FC = () => {
  const { message, changeMessage } = useNumberContext();

  return (
    <StyledTextField
    value={message}
    onChange={(e) => changeMessage(e.target.value)} 
    placeholder='הודעה'
    width='70%'
    />
  )
}

export default WriteMessage;
