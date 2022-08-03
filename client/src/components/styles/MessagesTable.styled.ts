import styled from 'styled-components';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableWrap = styled.div`
max-height: 70vh;
width: 100%;
overflow: auto;
background-color: white;
border: 3px solid #7ED956;
@media (max-width: 768px) {
  border: 0;
}
`;

export const Table = styled.table`
width: 100%;
border-collapse: collapse;

* {
  font-size: 0.6rem;
  @media (max-width: 768px) {
    font-size: 0.55rem;
  }
}

tr:nth-child(even) {
  background: #f2f2f2;
}
`;

export const TableHead = styled.thead`
position: sticky;
top: 0;
background-color: #7ED956;
`;

interface Props {
  width: number
}

export const TH = styled.th<Props>`
width: ${({ width }) => `${width}%`};
text-align: right;
color: white;
padding: 9px 5px 9px 0;
font-size: 0.7rem;
font-weight: normal;

@media (max-width: 768px) {
  font-size: 0.6rem;
}
`;

export const Arrows = styled(UnfoldMoreIcon)`
font-size: 0.7rem !important;
* {
  color: white;
}
`;

export const TD = styled.td`
padding: 15px;

@media (max-width: 768px) {
  padding: 5px;
}
`;

export const TDContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 0.7rem;
`;

export const Phone = styled.div`
direction: ltr;
text-align: right;
`;

export const MessageText = styled.div`
flex: 1;
`;

export const Delete = styled(DeleteIcon)`
font-size: 0.7rem !important;
`;

export const ArrowDown = styled(CallReceivedIcon)`
font-size: 0.7rem !important;
`;