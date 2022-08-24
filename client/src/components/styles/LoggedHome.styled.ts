import styled from 'styled-components';
import Modal from '@mui/material/Modal';

export const StyledLoggedHome = styled.div`
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
margin-top: 4vh;

@media (max-width: 768px) {
    margin-bottom: 22vh;
}
`;

export const StyledModal = styled(Modal)`
display: flex;
justify-content: center;
align-items: center;
`;

export const ModalWrap = styled.div`
width: 50%;

@media (max-width: 768px) {
    width: 100%;
}
`;
