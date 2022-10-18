import { useTranslation } from 'react-i18next';
import {
  StyledHome, Explain, StyledWrap,
} from './styles/Home.styled';
import HomeNavBar from './HomeNavBar';
import SendMessage from './SendMessage';
import Footer from './Footer';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledHome>
      <StyledWrap>
        <HomeNavBar />
        <Explain>
          {t('Home.mainText')}
        </Explain>
        <SendMessage />
      </StyledWrap>
      <Footer />
    </StyledHome>
  );
};

export default Home;
