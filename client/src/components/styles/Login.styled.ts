import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import StyledButton from './Button.styled';
import StyledInput from './TextField.styled';

export const StyledLogin = styled.div`
max-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #F5F5F5;
flex: 2;
@media (max-width: 768px) {
  min-height: ${window.innerHeight}px;
}
`;

export const LoginContainer = styled.div`
height: 70%;
width: 50%;
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
@media (max-width: 768px) {
  min-height: ${window.innerHeight}px;
  width: 100%;
  padding: 0;
  justify-content: space-around;
}
`;

export const LoginLogo = styled.img`
width: 7vw;
object-fit: contain;
@media (max-width: 768px) {
  width: 20vw;
}
`;

export const LoginTitle = styled.span`
font-size: 1.1rem;
font-family: Arial, Helvetica, sans-serif;
@media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ToSignUp = styled.span`
font-size: 0.6rem;
font-family: Arial, Helvetica, sans-serif;
@media (max-width: 768px) {
    font-size: 0.8rem;
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
input {
  font-size: 0.7rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}
`;

export const AccountLogo = styled(AccountCircleIcon)`
font-size: 1.1rem !important;
`;

export const KeyLogo = styled(KeyIcon)`
font-size: 1.1rem !important;
`;

interface ErrorMessageProps {
  showErr: number
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
display: ${({ showErr }) => (showErr ? 'inline' : 'none')};;
width: 70%;
text-align: start;
color: #f02849;
font-size: 0.55rem;
font-family: Arial, Helvetica, sans-serif;
`;

export const LoginButton = styled(StyledButton)`
&& {
  width: 70%;
  font-size: 0.7rem;
  @media (max-width: 768px) {
    margin-bottom:41vh;
    font-size: 0.9rem;
  }
}

`;
