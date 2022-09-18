import styled from 'styled-components';
import StyledButton from './Button.styled';
import StyledInput from './TextField.styled';

export const StyledSignUp = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.backgrounds.thirdary};
flex: 2;

@media (max-width: 768px) {
  height: ${window.innerHeight}px;
  background-color: white;
}
`;

export const SignUpContainer = styled.div`
height: 80%;
width: 60%;
padding: 10px;
margin: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: ${({ theme }) => theme.backgrounds.secondary};
border: ${({ theme }) => (!theme.isDarkMode ? '1px solid #DCDCDC' : 'none')};
border-radius: 5px;
box-shadow:  ${({ theme }) => (!theme.isDarkMode ? '0px 0px 8px 4px #E0E0E0' : 'none')};


@media (max-width: 768px) {
  height: 100%;
  width: 100%;
  padding: 0;
  border: 0;
  box-shadow: none;
  margin-top: 3vh;
  margin-bottom: 20vh;
}
`;

export const SignUpInputContainer = styled.div`
height: 55%;
width: 80%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1.3fr;
grid-gap: 0% 5%;
@media (max-width: 768px) {
  height: 60%;
}
`;

export const SignUpInput = styled(StyledInput)``;
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
