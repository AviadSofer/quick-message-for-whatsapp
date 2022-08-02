import { ChangeEvent, useState } from 'react';
import saveMessage from '../api/saveMessage';
import { useNumberContext } from '../NumberContext';
import ErrorMessage from './styles/ErrorMessage.styled';
import { InputContainer, SendButton, StyledSendMessage } from './styles/SendMessage.styled';
import StyledInput from './styles/TextField.styled';

const SendMessage: React.FC = () => {
  const {
    prefix, phone, message, changePrefix, changePhone, changeMessage,
  } = useNumberContext();
  const [showErr, setShowErr] = useState(0);
  const createLink = async () => {
    setShowErr(0);
    const phoneWithoutZero = phone[0] === '0' ? phone.slice(1) : phone;
    if (phoneWithoutZero.length >= 9) {
      const link = `https://wa.me/${prefix}${phone}?text=${message}`;
      window.open(link, '_blank');
      if (localStorage.getItem('token')) await saveMessage(prefix, phoneWithoutZero, message);
    } else {
      setShowErr(+true);
    }
  };
  return (
    <StyledSendMessage>
      <InputContainer>
        <StyledInput
          value={phone}
          placeholder="מספר טלפון"
          type="number"
          ltr={+true}
          onChange={(e) => changePhone(e.target.value)}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.slice(0, 10);
          }}
        />
        <StyledInput
          value={prefix}
          placeholder="קידומת"
          type="number"
          ltr={+true}
          onChange={(e) => changePrefix(e.target.value)}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.slice(0, 3);
          }}
        />
        <ErrorMessage showErr={showErr}>
          מספר קצר מדי :(
          מספר תקין הוא משהו בסגנון של 054-123-4567
        </ErrorMessage>
        <StyledInput
          value={message}
          placeholder="הודעה"
          gridarea="2 / 1 / 2 / 3"
          onChange={(e) => changeMessage(e.target.value)}
        />
      </InputContainer>
      <SendButton
        green={+true}
        onClick={createLink}
      >
        שלח
      </SendButton>
    </StyledSendMessage>
  );
};

export default SendMessage;
