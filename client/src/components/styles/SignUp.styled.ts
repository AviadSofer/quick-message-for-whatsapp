import styled from 'styled-components';
import StyledButton from './Button.styled';
import NewInput from './NewInput,styled';
import StyledInput from './TextField.styled';

export const StyledSignUp = styled.div`
max-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #F5F5F5;
flex: 2;

@media (max-width: 768px) {
  height: ${window.innerHeight}px;
}
`;

export const SignUpContainer = styled.div`
height: 90%;
width: 60%;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: white;
border-style: solid;
border-width: 1px;
border-color: #DCDCDC;
border-radius: 5px;
box-shadow: 0px 0px 8px 4px #E0E0E0;

@media (max-width: 768px) {
  height: 100%;
  width: 100%;
  padding: 0;
  justify-content: space-around;
}
`;

export const SignUpInputContainer = styled.div`
height: 45%;
width: 80%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1.3fr;
grid-gap: 0% 5%;
`;

export const SignUpInput = styled(NewInput)``;
SignUpInput.defaultProps = {
  font: '0.65rem',
  autoComplete: 'new-password', // should disable the auto complete
};

export const SignUpButton = styled(StyledButton)`
&& {
  width: 40%;
  font-size: 0.7rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}
`;
