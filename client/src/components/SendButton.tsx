import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNumberContext } from '../NumberContext';
import StyledButton from './styles/Button.styled';

const StyledSendButton = styled(StyledButton)`
&& {
  width: 20%;
  font-size: 0.9rem;
}
`;

const SendButton: React.FC = () => {
  const { prefix, phone, message } = useNumberContext();
  // re-render this function just while prefix, phone or message will re-rendering
  const createLink = useCallback(() => {
    const link = `https://wa.me/${prefix}${phone}?text=${message}`;
    window.open(link, '_blank');
  }, [prefix, phone, message]);

  return (
    <StyledSendButton
      green={+true}
      onClick={createLink}
    >
      שלח
    </StyledSendButton>
  );
};

export default SendButton;
