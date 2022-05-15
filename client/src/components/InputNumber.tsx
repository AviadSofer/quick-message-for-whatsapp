import { useNumberContext } from '../NumberContext';
import StyledInputNumber from './styles/InputNumber.styled.js';
import StyledInput from './styles/TextField.styled.js';

const InputNumber: React.FC = () => {
  const { prefix, changePrefix, changePhone } = useNumberContext();

  return (
    <StyledInputNumber>
      <StyledInput
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
      <StyledInput
        onChange={(e: { target: { value: string; }; }) => changePhone(e.target.value)}
        placeholder="מספר טלפון"
        type="number"
        width="70%"
      />
    </StyledInputNumber>
  );
};

export default InputNumber;
