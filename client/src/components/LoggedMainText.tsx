import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import fetchData from '../api/fetchData';
import { useMessage } from '../contexts/Message';
import { useSavedMessages } from '../contexts/SavedMessages';
import Loading from './styles/Loading.styled';
import { HelloTitle, ReSendButton, StyledLoggedMainText } from './styles/LoggedMainText.styles';
import { MediumTitle } from './styles/Title.styled';

const LoggedMainText: React.FC = () => {
  const { t, i18n } = useTranslation();

  const { changeMessage } = useMessage();
  const { savedMessages, setSavedMessages } = useSavedMessages();
  const { data, error } = useSWR('/api/get-user-profile', fetchData);

  const [isLoading, setIsLoading] = useState(false);
  const [greet, setGreet] = useState('');
  const [mainText, setMainText] = useState('');
  const [showButton, setShowButton] = useState(0);

  const lastMessage = savedMessages[0];

  const getGreet = () => {
    const hr = new Date().getHours();
    if (hr >= 5 && hr < 12) return t('greetes.goodMorning');
    if (hr >= 12 && hr <= 17) return t('greetes.goodAfternoon');
    if (hr >= 17 && hr <= 22) return t('greetes.goodEvening');
    return t('greetes.goodNight');
  };

  const getDurationTime = (timeInMilliseconds: number) => {
    const passedTime = new Date().valueOf() - timeInMilliseconds;
    if (passedTime < 86400000) {
      return t('timeExpressions.today');
    } if (passedTime > 86400000 && passedTime < 172800000) {
      return t('timeExpressions.yesterday');
    } if (passedTime > 172800000 && passedTime < 259200000) {
      return t('timeExpressions.twoDaysAgo');
    }
    return t('timeExpressions.numberDaysAgo', { number: Math.floor(passedTime / 86400000) });
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const messagesList = await fetchData('/api/get-messages');
      setSavedMessages(messagesList);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    setGreet(getGreet());
  });

  useEffect(() => {
    if (savedMessages.length === 0) {
      setShowButton(0);
      setMainText(t('LoggedMainText.zeroMessages'));
    } else {
      const lastMessageTime = getDurationTime(new Date(lastMessage.date).valueOf());
      const lastMessagePhone = `0${(lastMessage.phoneNumber).slice(5, 16)}`;
      if (savedMessages.length === 1) {
        setMainText(t('LoggedMainText.firstMessage', {
          timeExpression: lastMessageTime,
          phoneNumber: lastMessagePhone,
        }));
        setShowButton(+true);
      } else {
        setMainText(t('LoggedMainText.manyMessages', {
          timeExpression: lastMessageTime,
          phoneNumber: lastMessagePhone,
          numberOfMessages: savedMessages.length,
        }));
        setShowButton(+true);
      }
    }
  }, [savedMessages, i18n.language]);

  const handleReSend = () => {
    const lastMessagePhone = lastMessage.phoneNumber;
    changeMessage({
      prefix: `${lastMessagePhone.slice(1, 4)}`,
      phone: `${lastMessagePhone.slice(5, 7)}${lastMessagePhone.slice(8, 11)}${lastMessagePhone.slice(12, 16)}`,
      textMessage: `${lastMessage.textMessage}`,
    });
  };

  if (error) return <MediumTitle>{t('errors.error')}</MediumTitle>;

  if (!data) return <Loading />;

  const firstName = `${data.fullName}`.split(' ')[0];

  return (
    <StyledLoggedMainText>
      <HelloTitle>
        {greet}
        {' '}
        {firstName}
        &#128512;
      </HelloTitle>
      <MediumTitle>
        {isLoading ? <Loading /> : mainText}
      </MediumTitle>
      <ReSendButton showbutton={showButton} green={+true} onClick={handleReSend}>
        {t('buttons.yes')}
      </ReSendButton>
    </StyledLoggedMainText>
  );
};

export default LoggedMainText;
