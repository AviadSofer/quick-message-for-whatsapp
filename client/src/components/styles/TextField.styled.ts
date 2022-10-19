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
direction: ${({ theme }) => theme.i18n.dir()};

input {
  direction: ${({ theme, ltr }) => (ltr ? 'ltr' : theme.i18n.dir())};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${({ font }) => font};
  color: ${({ theme }) => theme.fonts.inputText};

  &:-webkit-autofill { 
    transition: background-color 5000s ease-in-out 0s; /*remove color in autofill*/
    -webkit-text-fill-color: ${({ theme }) => theme.fonts.inputText};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

& {
  label {
    font-size: ${({ font }) => font};
    color: ${({ theme }) => theme.fonts.text};

    transform-origin: ${({ theme }) => ((theme.i18n.dir() === 'rtl') ? 'right !important' : 'left !important')};
    right: ${({ theme }) => ((theme.i18n.dir() === 'rtl') ? '0 !important' : 'auto')};
    text-align: ${({ theme }) => ((theme.i18n.dir() === 'rtl') ? 'right' : 'left')};

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .Mui-focused { /*change label-color after clicked*/
    color: ${({ error }) => (error ? 'red' : '#35910f !important')};
  }

  & .MuiFormHelperText-root { /*helper text*/
    text-align: ${({ theme }) => ((theme.i18n.dir() === 'rtl') ? 'right' : 'left')};
    font-size: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }

  .MuiInput-underline:before {
    border-bottom-color: ${({ theme }) => theme.fonts.text};
  }

  && .MuiInput-underline:hover:before {
    border-bottom-color: ${({ theme }) => theme.fonts.text};
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
