import React from 'react';
import styled from 'styled-components';
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

const SendButton: React.FC<Props> = ({ setShowErr }) => {
  const { prefix, phone, message } = useNumberContext();
  const createLink = () => {
    setShowErr(0);
    if (phone.length >= 9) {
      const link = `https://wa.me/${prefix}${phone}?text=${message}`;
      window.open(link, '_blank');
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

export default SendButton;
