import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import saveMessage from '../api/saveMessage';
import getCookie from '../helpers/getCookie';
import { useMessage } from '../contexts/Message';
import ErrorMessage from './styles/ErrorMessage.styled';
import {
  ErrorContainer, InputContainer, SendButton, StyledSendMessage,
} from './styles/SendMessage.styled';
import StyledInput from './styles/TextField.styled';
import fetchData from '../api/fetchData';
import { useSavedMessages } from '../contexts/SavedMessages';

const SendMessage: React.FC = () => {
  const { t } = useTranslation();

  const { setSavedMessages } = useSavedMessages();
  const { message, changeMessage } = useMessage();
  const { prefix, phone, textMessage } = message;

  const [showErr, setShowErr] = useState(0);

  const createLink = async () => {
    setShowErr(0);
    const phoneWithoutZero = phone[0] === '0' ? phone.slice(1) : phone;
    if (phoneWithoutZero.length >= 9) {
      const link = `https://wa.me/${prefix}${phone}?text=${textMessage}`;
      window.open(link, '_blank');

      const checkToken = getCookie('checkToken');
      if (checkToken) {
        await saveMessage(prefix, phoneWithoutZero, textMessage);
        const messagesList = await fetchData('/api/get-messages');
        setSavedMessages(messagesList);
      }
    } else {
      setShowErr(+true);
    }
  };

  return (
    <StyledSendMessage>
      <InputContainer>
        <StyledInput
          value={prefix}
          label={t('labels.prefix')}
          type="number"
          ltr={+true}
          onChange={(e) => changeMessage({ prefix: e.target.value })}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.slice(0, 3);
          }}
        />
        <StyledInput
          value={phone}
          label={t('labels.phone')}
          type="number"
          ltr={+true}
          onChange={(e) => {
            changeMessage({ phone: e.target.value });
            if (phone.length > 0) setShowErr(0);
          }}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.slice(0, 10);
          }}
        />
        <ErrorContainer>
          <ErrorMessage showErr={showErr}>{t('errors.tooShort')}</ErrorMessage>
        </ErrorContainer>
        <StyledInput
          value={textMessage}
          label={t('labels.textMessage')}
          gridarea={showErr ? '3 / 1 / 3 / 3' : '2 / 1 / 2 / 3'}
          onChange={(e) => changeMessage({ textMessage: e.target.value })}
        />
      </InputContainer>
      <SendButton
        green={+true}
        onClick={createLink}
      >
        {t('buttons.send')}
      </SendButton>
    </StyledSendMessage>
  );
};

export default SendMessage;
