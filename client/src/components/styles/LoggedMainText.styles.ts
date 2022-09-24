import styled from 'styled-components';
import StyledButton from './Button.styled';
import { MediumTitle } from './Title.styled';

export const StyledLoggedMainText = styled.div`
height: 35vh;

display: flex;
flex-direction: column;
justify-content: space-between;

margin-top: 30px;
`;

export const HelloTitle = styled(MediumTitle)`
font-size: 1rem;
font-weight: bold;
`;

interface Props {
  showbutton?: number;
}

export const ReSendButton = styled(StyledButton)<Props>`
opacity: ${({ showbutton }) => (showbutton ? '1' : '0')};

&& {
  width: 15%;
  font-size: 0.7rem;
}`;
