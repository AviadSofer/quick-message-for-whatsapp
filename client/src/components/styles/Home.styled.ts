import styled from 'styled-components';
import { MediumTitle } from './Title.styled';

export const StyledHome = styled.div`
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
flex-basis: 80%;
justify-content: space-between;
margin-top: 3vh;
margin-bottom: 6vh;
`;

export const Explain = styled(MediumTitle)`
margin-top: 50px;
`;
