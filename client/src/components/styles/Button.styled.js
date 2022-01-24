import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
&&  {
  flex-basis: 20%;
  background-color: ${({ bg }) => bg || 'transparent'};
  color: ${({ fontColor }) => fontColor || 'gray'};
  font-family: ${({ theme }) => theme.fonts.first};
}
`
