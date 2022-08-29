import styled from 'styled-components';
import StyledButton from './Button.styled';
import StyledInput from './TextField.styled';

export const StyledLogin = styled.div`
max-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F5F5F5;
flex: 2;

@media (max-width: 768px) {
  height: ${window.innerHeight}px;
  background-color: white;
}
`;

export const LoginContainer = styled.div`
height: 70%;
width: 50%;
padding: 30px;
margin: 30px;
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
  margin: 0;
  justify-content: space-around;
  box-shadow: none;
  border-width: 0;
}
`;

export const InputAndIcon = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
align-items: flex-end;
`;

export const LoginInput = styled(StyledInput)`
width: 86%;
`;
LoginInput.defaultProps = {
  font: '0.7rem',
};

export const SubmitButton = styled(StyledButton)`
&& {
  width: 70%;
  font-size: 0.7rem;

  @media (max-width: 768px) {
    margin-top: 5vh;
    margin-bottom: 22vh;
    font-size: 0.9rem;
  }
}
`;
