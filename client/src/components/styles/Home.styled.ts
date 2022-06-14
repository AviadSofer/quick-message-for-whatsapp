import styled from 'styled-components';

export const StyledHome = styled.div`
min-height: 100vh;
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
flex-basis: 80%;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 30px;
`;

export const Explain = styled.h2`
font-size: 0.8rem;
margin: 0;
`;

export const SendMessageContainer = styled.div`
height: 30vh;
display: flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 768px) {
    height: 20vh;
    margin-bottom:30vh;
}
`;

export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;
