import styled from 'styled-components';
import { SignUpButton, SignUpContainer } from './SignUp.styled';

export const SignUpChoiceContainer = styled(SignUpContainer)`
justify-content: space-around;
`;

export const ContinueButton = styled(SignUpButton)`
&& {
  width: 20vw;

  @media (max-width: 768px) {
    width: 70vw;
  }
}
`;
