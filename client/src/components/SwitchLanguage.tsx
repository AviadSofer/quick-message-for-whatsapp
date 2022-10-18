import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FlagIcon from './styles/FlagIcon.styled';

const SwitchLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const [lng, setLng] = useState <string>('');

  useEffect(() => {
    const currentLng = i18n.language;
    setLng(currentLng);
  }, []);

  const switchLanguageHandle = () => {
    if (lng === 'he') {
      setLng('en');
      i18n.changeLanguage('en');
    } else {
      setLng('he');
      i18n.changeLanguage('he');
    }
  };

  return (
    <IconButton onClick={switchLanguageHandle}>
      {(lng === 'he')
        ? <FlagIcon src="https://res.cloudinary.com/dmjmaixrd/image/upload/v1665591287/il_gmyhoy.svg" />
        : <FlagIcon src="https://res.cloudinary.com/dmjmaixrd/image/upload/v1665591284/gb_gvtsfh.svg" />}
    </IconButton>
  );
};

export default SwitchLanguage;
