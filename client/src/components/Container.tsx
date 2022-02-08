import { StyledContainer, Title, Explain, FlexContainer, StyledWrap} from './styles/Container.styled';
import NavBar from './NavBar';
import InputNumber from './InputNumber';
import WriteMessage from './WriteMessage';
import SendButton from './SendButton';

const Container: React.FC = () => {
  return (
    <StyledContainer>
      <StyledWrap>
          <NavBar/>
          <Title>שלנו. בחינם. בלי פרסומות. אף פעם.</Title>
          <Explain>אפליקציה בקוד פתוח לשליחת הודעה בוואטספ בלי לשמור את המספר.</Explain>
          <InputNumber/>
          <FlexContainer>
              <WriteMessage/>
              <SendButton/>
          </FlexContainer>
      </StyledWrap>
    </StyledContainer>
  )
}

export default Container;
