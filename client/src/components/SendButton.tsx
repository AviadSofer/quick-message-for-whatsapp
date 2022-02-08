import React from 'react';
import { useNumberContext } from '../NumberContext';
import { StyledButton } from './styles/Button.styled.js';

const SendButton: React.FC = () => {
  const { prefix, phone, message } = useNumberContext();

  function createLink () {
    const link = `https://wa.me/${prefix}${phone}?text=${message}`;
    window.open(link, "_blank");
  }

  return (
  <StyledButton 
  onClick={createLink} 
  variant="contained" 
  color="success"
  bg='#25D366' 
  buttonfontcolor='white'
  >
    שלח
  </StyledButton>
  )
}

export default SendButton;
