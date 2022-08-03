import styled from 'styled-components';

interface ErrorMessageProps {
    showErr: number
    gridarea?: string
}

const ErrorMessage = styled.span<ErrorMessageProps>`
display: ${({ showErr }) => (showErr ? 'inline' : 'none')};
grid-area: ${({ gridarea }) => gridarea};
width: 100%;
align-self: flex-start;
color: #f02849;
font-size: 0.55rem;
font-family: Arial, Helvetica, sans-serif;
`;

export default ErrorMessage;
