import { useEffect, useState } from 'react';
import HelloUser from './HelloUser';
import { ErrorMessage } from './styles/Login.styled';
import InputNumber from './InputNumber';
import MessagesTable from './MessagesTable';
import LoggedSendButton from './LoggedSendButton';
import LoggedNavBar from './LoggedNavBar';
import { FlexContainer } from './styles/Home.styled';
import { StyledLoggedHome, StyledWrap, SendMessageContainer } from './styles/LoggedHome.styled';
import WriteMessage from './WriteMessage';
import StyledHelloUser from './styles/HelloUser.styled';

const LoggedHome: React.FC = () => {
  const [showErr, setShowErr] = useState(0);
  useEffect(() => {
    window.addEventListener('load', () => { // make the height static, useful with mobile keyboard
      const viewport = (document.querySelector('meta[name=viewport]') as HTMLMetaElement);
      viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
    });
  });

  return (
    <StyledLoggedHome>
      <StyledWrap>
        <LoggedNavBar />
        <HelloUser />
        <MessagesTable />
        <StyledHelloUser>תרצה לשלוח הודעה חדשה?</StyledHelloUser>
        <SendMessageContainer>
          <InputNumber />
          <ErrorMessage showErr={showErr}>
            מספר קצר מדי :(
            מספר תקין הוא משהו בסגנון של 054-123-4567
          </ErrorMessage>
          <FlexContainer>
            <WriteMessage />
            <LoggedSendButton setShowErr={setShowErr} />
          </FlexContainer>
        </SendMessageContainer>
      </StyledWrap>
    </StyledLoggedHome>
  );
};

export default LoggedHome;
