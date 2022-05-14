import styled from 'styled-components';
import Button from '@mui/material/Button';

interface Props {
  bg?: string,
  font?: string
  hoverbg?: string
}

const StyledButton = styled(Button)<Props>`
&&  {
  display: flex;
  justify-content: center;
  flex-basis: 20%;
  border-radius: 10px;
  background-color: ${({ bg }) => bg || 'transparent'};
  color: ${({ font }) => font || 'gray'};
  font-family: Secular One, sans-serif;
}
&&:hover {
  background-color: ${({ hoverbg }) => hoverbg || 'transparent'};
}
`;

const NavButton = styled(StyledButton)`
&& {
  width: 7vw;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  margin: 0px 6px 0px 6px;
}
`;

export { StyledButton, NavButton };
