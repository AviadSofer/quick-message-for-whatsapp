import { ChangeEvent, useState } from 'react';
import { useNumberContext } from '../NumberContext';
import LoggedSendButton from './LoggedSendButton';
import { InputContainer, StyledSendMessage } from './styles/SendMessage.styled';
import StyledInput from './styles/TextField.styled';

const SendMessage: React.FC = () => {
  const {
    prefix, phone, message, changePrefix, changePhone, changeMessage,
  } = useNumberContext();
  const [showErr, setShowErr] = useState(0);
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
        <StyledInput
          value={message}
          placeholder="הודעה"
          gridArea="2 / 1 / 2 / 3"
          onChange={(e) => changeMessage(e.target.value)}
        />
      </InputContainer>
      <LoggedSendButton setShowErr={setShowErr} />
    </StyledSendMessage>
  );
};

export default SendMessage;
