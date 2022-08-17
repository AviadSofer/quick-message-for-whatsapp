import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
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
  height: ${window.innerHeight}px;
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
  height: 100%;
  width: 100%;
  padding: 0;
  justify-content: space-around;
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

export const AccountLogo = styled(AccountCircleIcon)`
font-size: 1.1rem !important;
`;

export const KeyLogo = styled(KeyIcon)`
font-size: 1.1rem !important;
`;

export const ShowPasswordIcon = styled(Visibility)`
font-size: 0.7rem !important;

@media (max-width: 768px) {
  font-size: 0.9rem !important;
}
`;

export const ShowPasswordOffIcon = styled(VisibilityOff)`
font-size: 0.7rem !important;

@media (max-width: 768px) {
  font-size: 0.9rem !important;
}
`;

export const SubmitButton = styled(StyledButton)`
&& {
  width: 70%;
  font-size: 0.7rem;

  @media (max-width: 768px) {
    margin-bottom: 30vh;
    font-size: 0.9rem;
  }
}
`;
