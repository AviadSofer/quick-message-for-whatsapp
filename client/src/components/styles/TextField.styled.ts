import { TextField } from '@mui/material';
import styled from 'styled-components';

interface Props {
  gridarea?: string
  ltr?: number
  font?: string
  error?: boolean
}

const StyledInput = styled(TextField)<Props>`
grid-area: ${({ gridarea }) => gridarea};

input {
  direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')};
  font-size: ${({ font }) => font};
  color: black;

  &:-webkit-autofill { 
    transition: background-color 5000s ease-in-out 0s; /*remove color in autofill*/
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

& {
  label {
    font-size: ${({ font }) => font};
    transform-origin: right !important;
    right: 0 !important;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .Mui-focused { /*change label-color after clicked*/
    color: ${({ error }) => (error ? 'red' : '#35910f !important')};
  }

  & .MuiFormHelperText-root { /*helper text*/
    text-align: right;
    font-size: 0.5rem;
    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }

  .MuiInput-underline:after { /*change border-bottom-color after clicked*/
    border-bottom-color: #35910f;
  }
}

input::-webkit-inner-spin-button { /*disable the counter when the type is "number"*/
  -webkit-appearance: none; 
}
`;

StyledInput.defaultProps = {
  variant: 'standard',
  autoComplete: 'off', // should disable the auto complete
};

export default StyledInput;
