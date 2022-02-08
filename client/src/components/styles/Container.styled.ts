import styled from "styled-components";

export const StyledContainer = styled.div`
min-height: 100vh;
background-color: white;
flex: 2;
display: flex;
justify-content: center;
@media (max-width: 768px) {
    text-align: center;
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

export const Title = styled.h1`
font-size: 1.6rem;
color: black;
margin: 0;
`

export const Explain = styled.h2`
font-size: 1rem;
`

export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    margin-bottom: 100px;
}
`
