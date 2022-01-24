import { useContext } from 'react';
import NumberContext from '../NumberContext.js';
import { StyledButton } from './styles/Button.styled.js';

function SendButton(props) {
  const { prefix, phone, massage } = useContext(NumberContext)

  function createLink () {
    const link = `https://wa.me/${prefix}${phone}?text=${massage}`;
    window.open(link, "_blank");
  }

  return (
  <StyledButton onClick={createLink} bg={props.bg} fontColor={props.fontColor}>
    שלח
  </StyledButton>
  )
}

export default SendButton;
