import styled from 'styled-components';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableWrap = styled.div`
max-height: 40vh;
overflow: auto;
`;

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
tr:nth-child(even) {
  background: #f2f2f2;
}
@media (max-width: 768px) {
  width: 100vw;
}
`;

export const TableHead = styled.thead`
position: sticky;
top: 0;
background-color: #7ED956;
`;

export const ThContainer = styled.div`
display: flex;
align-items: center;
text-align: right;
color: white;
font-size: 0.7rem;
font-weight: normal;
padding: 9px 5px 9px 0;
`;

export const Arrows = styled(UnfoldMoreIcon)`
font-size: 0.7rem !important;
* {
  color: white;
}
`;

export const TD = styled.td`
vertical-align: top;
overflow: hidden;
padding: 8px;
font-size: 0.6rem;
`;

export const TableDate = styled(TD)`
width: 20%;
`;

export const TablePhone = styled(TD)`
direction: ltr;
text-align: right;
width: 20%;
`;

export const TableMessage = styled(TD)`
width: 40%;
`;

export const TableMessageContainer = styled.div`
display: flex;
align-items: center;
font-size: 0.6rem;
`;

export const MessageText = styled.div`
font-size: 0.6rem;
flex: 1;
`;

export const Delete = styled(DeleteIcon)`
font-size: 0.7rem !important;
`;

export const Keyboard = styled(KeyboardIcon)`
font-size: 0.7rem !important;
`;
