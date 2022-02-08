import styled from 'styled-components';
import Button from '@mui/material/Button';

interface Props {
  bg?: string,
  buttonfontcolor?: string
}

export const StyledButton = styled(Button)<Props>`
&&  {
  display: flex;
  justify-content: center;
  flex-basis: 20%;
  border-radius: 15px;
  background-color: ${({ bg }) => bg || 'transparent'};
  color: ${({ buttonfontcolor }) => buttonfontcolor || 'gray'};
  font-family: Secular One, sans-serif;
}
`
