import styled from 'styled-components';
import { MediumTitle } from './Title.styled';

export const StyledHome = styled.div`
height: 100vh;
flex: 2;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
    height: ${window.innerHeight}px;
    text-align: center;
}
`;

export const StyledWrap = styled.div`
height: 85%;
width: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 3vh;

@media (max-width: 768px) {
    width: 90%;
    margin-bottom: 22vh;
}
`;

export const Explain = styled(MediumTitle)`
margin-top: 50px;
`;
