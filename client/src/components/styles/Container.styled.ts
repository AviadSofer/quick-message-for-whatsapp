import styled from "styled-components";

export const StyledContainer = styled.div`
min-height: 100vh;
flex: 2;
display: flex;
justify-content: center;
@media (max-width: 768px) {
    text-align: center;
    min-height: ${window.innerHeight}px;
}
`

export const StyledWrap = styled.div`
display: flex;
flex-direction: column;
flex-basis: 80%;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 30px;
@media (max-width: 768px) {
    justify-content: space-around;
}
`

export const Logo = styled.img`
width: 25%;
object-fit: cover;
@media (max-width: 768px) {
    align-self: center;
    width: 20%;
}
`

export const Explain = styled.h2`
font-size: 0.8rem;
margin: 0;
`

export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`
