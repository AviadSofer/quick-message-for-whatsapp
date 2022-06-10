import React, { useCallback } from 'react';
import { useNumberContext } from '../NumberContext';
import StyledButton from './styles/Button.styled';

const SendButton: React.FC = () => {
  const { prefix, phone, message } = useNumberContext();
  // re-render this function just while prefix, phone or message will re-rendering
  const createLink = useCallback(() => {
    const link = `https://wa.me/${prefix}${phone}?text=${message}`;
    window.open(link, '_blank');
  }, [prefix, phone, message]);

  return (
    <StyledButton
      green
      onClick={createLink}
      variant="contained"
    >
      שלח
    </StyledButton>
  );
};

export default SendButton;
