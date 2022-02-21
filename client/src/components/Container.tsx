import { StyledContainer, Explain, FlexContainer, StyledWrap, Logo} from './styles/Container.styled';
import NavBar from './NavBar';
import logo from '../logo.png';
import InputNumber from './InputNumber';
import WriteMessage from './WriteMessage';
import SendButton from './SendButton';
import ShowLastMessages from './ShowLastMessages';

const Container: React.FC = () => {
  addEventListener("load", () => { // make the height static, useful with mobile keyboard
    const viewport: any = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', `${viewport.content}, height=${window.innerHeight}`);
  })

  return (
    <StyledContainer>
      <StyledWrap>
          <NavBar/>
          <Logo src={logo}/>
          <Explain>אפליקציה לשליחת הודעה בוואטספ בלי לשמור את המספר.</Explain>
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
