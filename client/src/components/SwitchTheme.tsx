import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';
import Icon from './Icon';
import { useThemeStore } from '../contexts/ThemeStore';
import StyledSwitchThemeButton from './styles/SwitchTheme.styled';

const SwitchThemeButton: React.FC = () => {
  const { isDarkMode, switchTheme } = useThemeStore();
  const [shake, setShake] = useState(0);

  return (
    <StyledSwitchThemeButton
      onClick={() => {
        setShake(+true);
        setTimeout(() => {
          switchTheme();
          setShake(0);
        }, 900);
      }}
      shake={shake}
    >
      {isDarkMode
        ? <Icon src={<NightlightRoundIcon />} size="1" />
        : <Icon src={<LightModeIcon />} size="1" />}
    </StyledSwitchThemeButton>
  );
};

export default SwitchThemeButton;
