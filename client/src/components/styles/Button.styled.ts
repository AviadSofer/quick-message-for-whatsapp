import styled from 'styled-components';
import Button from '@mui/material/Button';

interface Props {
  green?: number
}

const StyledButton = styled(Button)<Props>`
&& {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-family: Secular One, sans-serif;
  background-color: ${({ theme, green }) => (green ? theme.green : 'transparent')};
  color: ${({ theme, green }) => (green ? 'white' : theme.fonts.text)};
  box-shadow:  ${({ theme, green }) => (green && !theme.isDarkMode ? '0px 5px 9px -4px rgba(135,135,135,0.82)' : 'none')};
}
&&:hover {
  background-color: ${({ green }) => (green ? '#73de45' : 'transparent')};;
  box-shadow:  ${({ theme, green }) => (green && !theme.isDarkMode ? '0px 2px 9px 1px rgba(135,135,135,0.82)' : 'none')};
}
`;

export default StyledButton;
