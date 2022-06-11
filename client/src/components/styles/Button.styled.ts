import styled from 'styled-components';
import Button from '@mui/material/Button';

interface Props {
  green?: boolean
  width?: string
  fontSize?: string
  margin?: string
}

const StyledButton = styled(Button)<Props>`
&& {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-family: Secular One, sans-serif;
  background-color: ${({ green }) => (green ? '#7ED956' : 'transparent')};
  color: ${({ green }) => (green ? 'white' : 'gray')};
}
&&:hover {
  background-color: ${({ green }) => (green ? '#73de45' : 'transparent')};;
}
`;

export default StyledButton;
