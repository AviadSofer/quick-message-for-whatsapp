import styled from 'styled-components';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableWrap = styled.div`
max-height: 70vh;
width: 100%;
overflow: auto;
background-color: white;
border: 3px solid ${({ theme }) => theme.green};

@media (max-width: 768px) {
  border: 0;
}
`;

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
background-color: ${({ theme }) => theme.backgrounds.primary};

* {
  font-size: 0.6rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
}

tr:nth-child(even) {
  background-color: ${({ theme }) => theme.backgrounds.secondary};
}
`;

export const TableHead = styled.thead`
position: sticky;
top: 0;
background-color: ${({ theme }) => theme.green};
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
  font-size: 0.85rem;
  width: 33%;
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
