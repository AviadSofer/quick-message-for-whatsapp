import styled from 'styled-components';

export const StyledLoggedHome = styled.div`
max-height: 100vh;
flex: 2;
display: flex;
justify-content: center;
@media (max-width: 768px) {
    text-align: center;
    min-height: ${window.innerHeight}px;
}
`;

export const StyledWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-basis: 80%;
margin-top: 3vh;
margin-bottom: 3vh;
`;
