import { SocialIconsContainer, StyledFooter, StyledSocialIcon } from './styles/Footer.styled';
import { ATitle, SmallTitle } from './styles/Title.styled';

const Footer: React.FC = () => (
  <StyledFooter>
    <SmallTitle>
      נוצר על ידי Aviad Sofer
      |
    </SmallTitle>
    <SocialIconsContainer>
      <StyledSocialIcon url="https://twitter.com/AviadSofer" />
      <StyledSocialIcon url="https://github.com/AviadSofer" />
      <StyledSocialIcon url="https://www.linkedin.com/in/aviad-sofer-03ba1818b" />
    </SocialIconsContainer>
    <SmallTitle>
      |
      {' '}
      <ATitle href="https://github.com/AviadSofer/quick-message-for-whatsapp">
        בקוד פתוח
      </ATitle>
    </SmallTitle>
  </StyledFooter>
);

export default Footer;
