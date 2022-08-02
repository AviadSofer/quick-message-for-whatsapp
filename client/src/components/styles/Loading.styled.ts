import styled from 'styled-components';

const Loading = styled.div`
border: 8px solid white;
border-top: 8px solid #7ED956;
border-radius: 50%;
width: 5vh;
height: 5vh;
animation: spin 0.5s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default Loading;
