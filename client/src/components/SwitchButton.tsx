import { IconButton } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import Icon from './Icon';
import { useThemeStore } from '../contexts/ThemeStore';

const SwitchButton: React.FC = () => {
  const { isDarkMode, switchTheme } = useThemeStore();

  return (
    <IconButton onClick={switchTheme}>
      {isDarkMode
        ? <Icon src={<NightlightRoundIcon />} size="1" />
        : <Icon src={<LightModeIcon />} size="1" />}
    </IconButton>
  );
};

export default SwitchButton;
