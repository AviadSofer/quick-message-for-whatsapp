import { useState } from 'react';
import { useNumberContext } from '../NumberContext';
import { Credits, Link, Nav, Span } from './styles/NavBar.styled';

const NavBar: React.FC = () => {
  const { changeMessage } = useNumberContext();
  return (
    <Nav>
    <Credits>
        נוצר על ידי {' '} 
        <Link href='https://github.com/AviadSofer' target='_blank'>אביעד סופר</Link> 
        {' '} בכמה רגעים של שעמום
        <Span> | </Span>
        <Link href='https://github.com/AviadSofer/send-whatsapp-massage' target='_blank'>בקוד פתוח</Link>
        <Span> | </Span>
        <Link onClick={() => changeMessage('היי, תראה איזו אפליקציה מגניבה מצאתי!')}>שיתוף עם חבר</Link>
    </Credits>
  </Nav>
  )
}

export default NavBar;
