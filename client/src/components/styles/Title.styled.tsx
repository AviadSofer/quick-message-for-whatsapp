import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LargeTitle = styled.span`
font-size: 1.1rem;

@media (max-width: 768px) {
    font-size: 1.2rem;
}
`;

export const MediumTitle = styled.span`
font-size: 0.9rem;
white-space: pre-line;

@media (max-width: 768px) {
    font-size: 0.8rem;
}
`;

export const SmallTitle = styled.span`
font-size: 0.6rem;
font-family: Arial, Helvetica, sans-serif;

@media (max-width: 768px) {
    font-size: 0.8rem;
}
`;

export const LinkTitle = styled(Link)`
font-size: 0.6rem;
font-family: Arial, Helvetica, sans-serif;

@media (max-width: 768px) {
    font-size: 0.8rem;
}
`;

export const ATitle = styled.a`
font-size: 0.6rem;

@media (max-width: 768px) {
    font-size: 0.8rem;
}
`;
