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
  width: ${({ width }) => width || '20%'};
  display: flex;
  justify-content: center;
  background-color: ${({ green }) => (green ? '#7ED956' : 'transparent')};
  border-radius: 10px;
  margin: ${({ margin }) => margin || '0'};
  color: ${({ green }) => (green ? 'white' : 'gray')};
  font-size: ${({ fontSize }) => fontSize || '0.9rem'};
  font-family: Secular One, sans-serif;
}
&&:hover {
  background-color: ${({ green }) => (green ? '#73de45' : 'transparent')};;
}
`;

export default StyledButton;
