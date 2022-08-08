import styled from 'styled-components';

interface ErrorMessageProps {
  showErr: number
}

const ErrorMessage = styled.span<ErrorMessageProps>`
display: ${({ showErr }) => (showErr ? 'inline' : 'none')};
color: #f02849;
font-size: 0.6rem;
font-family: Arial, Helvetica, sans-serif;
`;

export default ErrorMessage;
