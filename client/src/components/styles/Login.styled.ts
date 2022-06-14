import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import StyledButton from './Button.styled';
import StyledInput from './TextField.styled';

export const StyledLogin = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #F5F5F5;
flex: 2;
`;

export const LoginContainer = styled.div`
width: 50%;
height: 70%;
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
}
`;
