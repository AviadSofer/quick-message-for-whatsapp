import { useNumberContext } from '../NumberContext';
import StyledInputNumber from './styles/InputNumber.styled.js';
import StyledTextField from './styles/TextField.styled.js';

const InputNumber: React.FC = () => {
  const { prefix, changePrefix, changePhone } = useNumberContext();

  return (
    <StyledInputNumber>
      <StyledTextField
        onChange={(e: { target: { value: string; }; }) => changePrefix(e.target.value)}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          target.value = target.value.slice(0, 3); // set the max length to 3
        }}
        placeholder="קידומת"
        type="number"
        defaultValue={prefix}
        width="25%"
      />
      <StyledTextField
        onChange={(e: { target: { value: string; }; }) => changePhone(e.target.value)}
        placeholder="מספר טלפון"
        type="number"
        width="70%"
      />
    </StyledInputNumber>
  );
};

export default InputNumber;
