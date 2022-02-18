import React from 'react';
import { Clock, StatusBarIcon, Nav, StatusBar, StyledHeader } from './styles/Header.styled';
import { Icon } from './styles/Icon.styled';
import PhoneNumber from './PhoneNumber';

interface Props {
  phoneNumber: string
}

const Header: React.FC<Props> = (props) => {
  const date = new Date();
  return (
    <StyledHeader>
      <StatusBar>
        <Clock>{date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}</Clock>
        <StatusBarIcon src={'../assets/img/signal.png'}/>
        <StatusBarIcon src={'../assets/img/wifi.png'}/>
        <StatusBarIcon src={'../assets/img/battery.png'}/>
      </StatusBar>
      <Nav>
        <Icon width='8%' flipHorizontally={true} src={'../assets/img/arrow.png'}/>
        <Icon width='13%' src={'../assets/img/profile.png'}/>
        <PhoneNumber {...props}/>
        <Icon src={ '../assets/img/video.png'}/>
        <Icon src={'../assets/img/phone.png'}/>
        <Icon src={'../assets/img/more.png'}/>
      </Nav>
    </StyledHeader>
  )
}

export default Header;
