import styled from 'styled-components';
import StyledButton from './Button.styled';

export const StyledGoogleLogin = styled(StyledButton)`
&& {
    width: 20vw;
    background-color: white;
    color: grey;
    font-size: 0.7rem;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 1px 3px 0 grey;

    @media (max-width: 768px) {
    width: 70vw;
    padding: 10px;
  }
}

&&:hover {
  background-color: white;
  box-shadow: 0 1px 5px 0 grey
}
`;

export const GoogleIcon = styled.img`
width: 0.8rem;
margin-right: 0.5rem;
`;
GoogleIcon.defaultProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
};
