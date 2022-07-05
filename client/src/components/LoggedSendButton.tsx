import React from 'react';
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

interface Props {
  setShowErr: (value: number) => void;
}

const LoggedSendButton: React.FC<Props> = ({ setShowErr }) => {
  const { prefix, phone, message } = useNumberContext();
  const createLink = async () => {
    setShowErr(0);
    const phoneWithoutZero = phone[0] === '0' ? phone.slice(1) : phone;
    if (phoneWithoutZero.length >= 9) {
      const link = `https://wa.me/${prefix}${phone}?text=${message}`;
      window.open(link, '_blank');
      await saveMessage(prefix, phoneWithoutZero, message);
    } else {
      setShowErr(+true);
    }
  };

  return (
    <StyledSendButton
      green={+true}
      onClick={createLink}
    >
      שלח
    </StyledSendButton>
  );
};

export default LoggedSendButton;
