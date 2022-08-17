import { Input } from '@mui/material';
import styled from 'styled-components';

interface Props {
  gridarea?: string
  ltr?: number
}

const StyledInput = styled(Input)<Props>`
grid-area: ${({ gridarea }) => gridarea};

input {
  direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')};
  font-size: 1.1rem;

  &::placeholder {
    text-align: right;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none; /*disable the counter when the type is "number"*/
}

&.MuiInput-underline:after {
  border-bottom-color: #35910f; /*change border-bottom-color after clicked*/
}
`;

export default StyledInput;
