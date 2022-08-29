import styled from 'styled-components';

interface Props {
  src?: JSX.Element
  size: string
  mobilesize?: string
}

const StyledIcon = styled.div<Props>`
font-size: 0;

* {
  font-size: ${({ size }) => `${size}rem`} !important;

  @media (max-width: 768px) {
    font-size: ${({ mobilesize }) => `${mobilesize}rem`} !important;
  }
}
`;

const Icon: React.FC<Props> = ({ src, size, mobilesize }) => (
  <StyledIcon size={size} mobilesize={mobilesize}>
    {src}
  </StyledIcon>
);

export default Icon;
