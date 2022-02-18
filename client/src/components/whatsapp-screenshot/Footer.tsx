import React from 'react';
import { MessageContainer, Send, StyledFooter } from './styles/Footer.styled';
import Message from './Message';
import { Icon } from './styles/Icon.styled';

interface Props {
  phoneNumber: string,
  message: string
}

const Footer: React.FC<Props> = (props) => {
  const { phoneNumber, message } = props;

  function createLink () {
    const link = `https://wa.me/${phoneNumber}}?text=${message}`;
    window.open(link, "_blank");
  }
  
  return (
    <StyledFooter>
      <MessageContainer>
        <Icon width='10%' src={'../assets/img/emo.png'}/>
        <Message {...props}/>
        <Icon width='10%' src={'../assets/img/add.png'}/>
        <Icon width='10%' src={'../assets/img/camera.png'}/>
      </MessageContainer>
      <Send src={'../assets/img/send.png'} onClick={createLink}/>
    </StyledFooter>
  )
}

export default Footer;
