import React, { useCallback } from 'react';
import styled from 'styled-components';
import saveMessage from '../hook/saveMessage';
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
  const createLink = useCallback(async () => {
    const link = `https://wa.me/${prefix}${phone}?text=${message}`;
    window.open(link, '_blank');
    await saveMessage(prefix, phone, message);
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
