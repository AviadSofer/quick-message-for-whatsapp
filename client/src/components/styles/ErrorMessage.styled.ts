import styled from 'styled-components';

interface ErrorMessageProps {
    showErr: number
}

const ErrorMessage = styled.span<ErrorMessageProps>`
display: ${({ showErr }) => (showErr ? 'inline' : 'none')};;
width: 70%;
text-align: start;
color: #f02849;
font-size: 0.55rem;
font-family: Arial, Helvetica, sans-serif;
`;

export default ErrorMessage;
