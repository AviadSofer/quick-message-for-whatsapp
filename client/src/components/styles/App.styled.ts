import styled from 'styled-components';

const StyledApp = styled.div`
height: 100vh;
display: flex;

@media (max-width: 768px) {
    flex-direction: column;
    height: ${window.innerHeight}px;
}
`;

export default StyledApp;
