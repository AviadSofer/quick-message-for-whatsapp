import { StyledButton } from './styles/Button.styled';
import { Nav, StyledContainer, Image, Title, Explain, FlexContainer, StyledWrap } from './styles/Container.styled'
import logo from '../logo.svg';
import InputNumber from './InputNumber';
import WriteMessage from './WriteMessage';
import SendButton from './SendButton';

function Container() {
  return (
    <StyledContainer>
      <StyledWrap>
        <Nav>
            <StyledButton>כפתור</StyledButton>
            <StyledButton>כפתור</StyledButton>
            <StyledButton>כפתור</StyledButton>
            <StyledButton>כפתור</StyledButton>
        </Nav>
        <Image src={logo}/>
        <Title>שלנו. בחינם. בלי פרסומות. אף פעם.</Title>
        <Explain>אפליקציה באופן סורס לשליחת הודעה בוואטספ בלי לשמור את המספר.</Explain>
        <InputNumber/>
        <FlexContainer>
          <WriteMessage/>
          <SendButton bg={'#25D366'} fontColor={'white'}/>
        </FlexContainer>
      </StyledWrap>
    </StyledContainer>
  )
}

export default Container;
