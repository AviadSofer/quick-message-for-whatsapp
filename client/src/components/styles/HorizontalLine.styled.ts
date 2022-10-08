import styled from 'styled-components';

const HorizontalLine = styled.hr`
width: 70%;
height: 1.5em;
text-align: center;
font-size: 0.5rem;
line-height: 4px;
position: relative;
border: 0;

&:before {
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, grey, transparent);
  position: absolute;
  left: 0;
  top: 50%;

  content: '';
}
&:after {
  display: inline-block;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  position: relative;
  padding: 0 10px;
  line-height: 1.5em;
  color: grey;
  color: ${({ theme }) => theme.fonts.text};

  content: attr(data-content);
}

`;

export default HorizontalLine;
