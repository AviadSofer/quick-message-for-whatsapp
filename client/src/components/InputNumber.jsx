import { useContext } from 'react';
import NumberContext from '../NumberContext.js';
import { StyledInputNumber } from './styles/InputNumber.styled.js';
import { StyledTextField } from './styles/TextField.styled.js';

function InputNumber() {
  const { prefix, changePrefix, changePhone } = useContext(NumberContext)

  return (
  <StyledInputNumber>
      <StyledTextField
      onChange={(e) => changePrefix(e.target.value)} 
      placeholder={'קידומת'} 
      type={'number'}
      defaultValue={prefix}
      width={'20%'}
      />
      <StyledTextField
      onChange={(e) => changePhone(e.target.value)} 
      placeholder={'מספר טלפון'} 
      type={'number'}
      width={'50%'}
      />
  </StyledInputNumber>
  )
}

export default InputNumber;
