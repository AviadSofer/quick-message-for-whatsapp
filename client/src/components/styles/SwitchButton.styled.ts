import styled from 'styled-components';
import { IconButton } from '@mui/material';

interface Props {
  shake: number
}

const StyledSwitchButton = styled(IconButton)<Props>`
animation-name: ${({ shake }) => (shake ? 'spin' : 'none')};
animation-duration: 1s;
animation-timing-function: ease;

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

export default StyledSwitchButton;
