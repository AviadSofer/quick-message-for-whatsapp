import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetchData from '../api/fetchData';
import { useMessage } from '../contexts/Message';
import { useSavedMessages } from '../contexts/SavedMessages';
import Loading from './styles/Loading.styled';
import { HelloTitle, ReSendButton, StyledLoggedMainText } from './styles/LoggedMainText.styles';
import { MediumTitle } from './styles/Title.styled';

const LoggedMainText: React.FC = () => {
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
    if (hr >= 5 && hr < 12) return 'בוקר טוב';
    if (hr >= 12 && hr <= 17) return 'צהריים טובים';
    if (hr >= 17 && hr <= 22) return 'ערב טוב';
    return 'לילה טוב';
  };

  const getDurationTime = (timeInMilliseconds: number) => {
    const passedTime = new Date().valueOf() - timeInMilliseconds;
    if (passedTime < 86400000) {
      return 'היום';
    } if (passedTime > 86400000 && passedTime < 172800000) {
      return 'אתמול';
    } if (passedTime > 172800000 && passedTime < 259200000) {
      return 'לפני יומיים';
    }
    return `לפני ${Math.floor(passedTime / 86400000)} ימים`;
  };

  useEffect(() => {
    (async () => {
      setGreet(getGreet());
      setIsLoading(true);
      const messagesList = await fetchData('/api/get-messages');
      setSavedMessages(messagesList);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (savedMessages.length === 0) {
      setShowButton(0);
      setMainText(`נראה שעוד לא שלחת אף הודעה!
      תמיד אפשר לשלוח הודעה כאן למטה,
      והיא תשמר, כאן, למתי שתרצה.`);
    } else {
      const lastMessageTime = getDurationTime(new Date(savedMessages[0].date).valueOf());
      const lastMessagePhone = `0${(savedMessages[0].phoneNumber).slice(5, 16)}`;
      if (savedMessages.length === 1) {
        setMainText(`וואו! הודעה ראשונה!
        ${lastMessageTime}, ל${lastMessagePhone},
        תרצה לשלוח אותה שוב?`);
        setShowButton(+true);
      } else {
        setMainText(`יפה! שלחת כבר ${savedMessages.length} הודעות!
        ההודעה האחרונה ששלחת הייתה ${lastMessageTime}, ל${lastMessagePhone}, 
        תרצה לשלוח אותה שוב?`);
        setShowButton(+true);
      }
    }
  }, [savedMessages]);

  const handleReSend = () => {
    const lastMessagePhone = lastMessage.phoneNumber;
    changeMessage({
      prefix: `${lastMessagePhone.slice(1, 4)}`,
      phone: `${lastMessagePhone.slice(5, 7)}${lastMessagePhone.slice(8, 11)}${lastMessagePhone.slice(12, 16)}`,
      textMessage: `${lastMessage.textMessage}`,
    });
  };

  if (error) return <MediumTitle>שגיאה :(</MediumTitle>;

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
      <ReSendButton showbutton={showButton} green={+true} onClick={handleReSend}>כן!</ReSendButton>
    </StyledLoggedMainText>
  );
};

export default LoggedMainText;
