import styled from 'styled-components';
import Button from '@mui/material/Button';

interface Props {
  green?: boolean
}

const StyledButton = styled(Button)<Props>`
&& {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-family: Secular One, sans-serif;
  background-color: ${({ green }) => (green ? '#7ED956' : 'transparent')};
  color: ${({ green }) => (green ? 'white' : 'gray')};
  box-shadow:  ${({ green }) => (green ? '0px 5px 9px -4px rgba(135,135,135,0.82)' : 'none')};
}
&&:hover {
  background-color: ${({ green }) => (green ? '#73de45' : 'transparent')};;
  box-shadow:  ${({ green }) => (green ? '0px 2px 9px 1px rgba(135,135,135,0.82)' : 'none')};
}
`;

export default StyledButton;
