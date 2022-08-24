import styled from 'styled-components';

const StyledMessageView = styled.div`
min-height: 100vh;
display: flex;
flex: 1;
background: rgb(96,199,133);
background: radial-gradient(circle, rgba(96,199,133,1) 0%, rgba(67,227,125,1) 98%);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3);

@media (max-width: 768px) {
    display: none;
}
`;

export default StyledMessageView;
