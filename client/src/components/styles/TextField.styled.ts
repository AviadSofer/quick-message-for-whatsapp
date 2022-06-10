import { Input } from '@mui/material';
import styled from 'styled-components';

interface Props {
  width?: string
  fontSize?: string
}

const StyledInput = styled(Input)<Props>`
width: ${({ width }) => width || '20%'};
input {
    font-size: ${({ fontSize }) => fontSize || '1.1rem'};
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
