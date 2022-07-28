import { Input } from '@mui/material';
import styled from 'styled-components';

interface Props {
  width?: string
  gridArea?: string
  ltr?: number
}

const StyledInput = styled(Input)<Props>`
width: ${({ width }) => width || 'auto'};
grid-area: ${({ gridArea }) => gridArea};
input {
  &::placeholder {
    text-align: right;
  }
  direction: ${({ ltr }) => (ltr ? 'ltr' : 'rtl')};
  font-size: 1.1rem;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none; /*disable the counter when the type is "number"*/
}
&.MuiInput-underline:after {
  border-bottom-color: #35910f; /*change border-bottom-color after clicked*/
}
@media (max-width: 768px) {
  input {
    font-size: 0.9rem;
  }
}
`;

export default StyledInput;
