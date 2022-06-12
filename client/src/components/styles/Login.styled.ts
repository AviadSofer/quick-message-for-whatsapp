import styled from 'styled-components';
import StyledButton from './Button.styled';

export const StyledLogin = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #F5F5F5;
flex: 2;
`;

export const LoginContainer = styled.div`
width: 30vw;
height: 70vh;
padding: 30px;
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
`;

export const LoginLogo = styled.img`
width: 7vw;
object-fit: contain;
`;

export const LoginTitle = styled.span`
font-size: 1.1rem;
font-family: Arial, Helvetica, sans-serif;
`;

export const ToSignUp = styled.span`
font-size: 0.6rem;
font-family: Arial, Helvetica, sans-serif;
`;

export const LoginButton = styled(StyledButton)`
&& {
  width: 70%;
  font-size: 0.7rem;
}
`;
