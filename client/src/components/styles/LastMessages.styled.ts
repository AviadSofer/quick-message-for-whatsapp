import styled from 'styled-components';

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

export const TH = styled.th`
text-align: right;
color: white;
font-size: 0.7rem;
font-weight: normal;
padding: 9px 5px 9px 0;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
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
