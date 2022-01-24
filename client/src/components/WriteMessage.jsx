import { useContext } from 'react';
import NumberContext from '../NumberContext.js';
import { StyledTextField } from './styles/TextField.styled';

function WriteMessage() {
  const { changeMassage } = useContext(NumberContext)

  return (
    <StyledTextField
    onChange={(e) => changeMassage(e.target.value)} 
    placeholder={'הודעה'}
    width={'70%'}
    />
  )
}

export default WriteMessage;
