import { Input } from "@mui/material";
import styled from "styled-components";

interface Props {
  width?: string
}

export const StyledTextField = styled(Input)<Props>`
width: ${({ width }) => width || '20%'};
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
@media (max-width: 768px) {
  input::-webkit-input-placeholder {
    font-size: 0.8rem;
}
}
`
