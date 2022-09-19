import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';
import Icon from './Icon';
import { useThemeStore } from '../contexts/ThemeStore';
import StyledSwitchButton from './styles/SwitchButton.styled';

const SwitchButton: React.FC = () => {
  const { isDarkMode, switchTheme } = useThemeStore();
  const [shake, setShake] = useState(0);

  return (
    <StyledSwitchButton
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
    </StyledSwitchButton>
  );
};

export default SwitchButton;
