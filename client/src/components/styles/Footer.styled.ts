import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

export const StyledFooter = styled.footer`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;

* {
  font-size: 0.6rem;
  font-family: Secular One, sans-serif;
}

@media (max-width: 768px) {
  padding: 0;
  padding-bottom: 10px;
}
`;

export const SocialIconsContainer = styled.div`
margin: 5px;
`;

export const StyledSocialIcon = styled(SocialIcon)`
margin: 3px;
`;
StyledSocialIcon.defaultProps = {
  style: { height: 30, width: 30 },
  bgColor: '#7ED956',
};
