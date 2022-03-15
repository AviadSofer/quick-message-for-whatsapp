import React, { useCallback } from 'react';
import { useNumberContext } from '../NumberContext';
import { StyledButton } from './styles/Button.styled.js';

const SendButton: React.FC = () => {
  const { prefix, phone, message } = useNumberContext();

  const createLink = useCallback(() => {
    const link = `https://wa.me/${prefix}${phone}?text=${message}`;
    window.open(link, '_blank');
  }, []);

  return (
    <StyledButton
      onClick={createLink}
      variant="contained"
      bg="#7ED956"
      hoverbg="#73de45"
      font="white"
    >
      שלח
    </StyledButton>
  );
};

export default SendButton;
