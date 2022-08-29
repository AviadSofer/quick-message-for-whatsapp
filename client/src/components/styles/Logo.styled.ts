import styled from 'styled-components';
import logo from '../../logo.svg';

interface Props {
  width?: string
  mobilewidth?: string
}

const Logo = styled.img<Props>`
width: ${({ width }) => width};
object-fit: contain;

@media (max-width: 768px) {
    width: ${({ mobilewidth }) => mobilewidth};
}
`;

Logo.defaultProps = {
  src: logo,
  onClick: () => {
    window.location.href = '/';
  },
};

export default Logo;
