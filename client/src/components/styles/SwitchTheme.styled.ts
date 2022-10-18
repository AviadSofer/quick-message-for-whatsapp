import styled from 'styled-components';
import { IconButton } from '@mui/material';

interface Props {
  shake: number
}

const StyledSwitchTheme = styled(IconButton)<Props>`
* {
  color: ${({ theme }) => (theme.isDarkMode ? 'white' : '#E49B0F')};
}

animation-name: ${({ shake }) => (shake ? 'spin' : 'none')};
animation-duration: 1s;
animation-timing-function: ease;

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

export default StyledSwitchTheme;
