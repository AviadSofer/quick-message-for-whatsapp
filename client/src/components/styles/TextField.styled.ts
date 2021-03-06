import { Input } from '@mui/material';
import styled from 'styled-components';

interface Props {
  width?: string
}

const StyledTextField = styled(Input)<Props>`
width: ${({ width }) => width || '20%'};
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

export default StyledTextField;
