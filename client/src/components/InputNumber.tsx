import { ChangeEvent } from 'react';
import { useNumberContext } from '../NumberContext';
import StyledInputNumber from './styles/InputNumber.styled.js';
import StyledInput from './styles/TextField.styled.js';

const InputNumber: React.FC = () => {
  const { prefix, changePrefix, changePhone } = useNumberContext();

  return (
    <StyledInputNumber>
      <StyledInput
        onChange={(e) => changePrefix(e.target.value)}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.slice(0, 3);
        }}
        placeholder="קידומת"
        type="number"
        defaultValue={prefix}
        width="25%"
        ltr={+true}
      />
      <StyledInput
        onChange={(e) => changePhone(e.target.value)}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.slice(0, 10);
        }}
        placeholder="מספר טלפון"
        type="number"
        width="70%"
        ltr={+true}
      />
    </StyledInputNumber>
  );
};

export default InputNumber;
