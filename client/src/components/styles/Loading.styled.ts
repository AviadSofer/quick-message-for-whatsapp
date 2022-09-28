import styled from 'styled-components';

const Loading = styled.div`
width: 4vh;
height: 4vh;

border: 4px solid ${({ theme }) => theme.green};
border-top: 4px solid ${({ theme }) => theme.backgrounds.primary};
border-radius: 50%;

margin: 5px;

animation: spin 0.5s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default Loading;
