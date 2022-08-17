import styled from 'styled-components';
import StyledButton from './Button.styled';

export const StyledSendMessage = styled.div`
height: 33vh;
display: flex;
justify-content: space-between;

@media (max-width: 768px) {
  height: 33vh;
  flex-direction: column;
}
`;

export const InputContainer = styled.div`
width: 70%;
display: grid;
align-items: flex-end;
grid-template-columns: 3.2fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 10% 5%;
@media (max-width: 768px) {
  height: 55%;
  width: 100%;
  align-items: stretch;
}
`;

export const ErrorContainer = styled.div`
grid-area: 2 / 1 / 2 / 3;
display: flex;
align-self: flex-start;
`;

export const SendButton = styled(StyledButton)`
&& {
  align-self: flex-end;
  width: 20%;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    width: 100%;
    align-self: center;
  }
}
`;
