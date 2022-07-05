import styled from 'styled-components';

export const TableWrap = styled.div`
max-height: 40vh;
overflow: auto;
* {
font-size: 0.8rem;
}
`;

export const Table = styled.table`
width: 100%;
.fixed {
  table-layout: fixed;
}
`;

export const TableHead = styled.thead`
position: sticky;
top: 0;
background-color: #7ED956;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
`;

export const TH = styled.th`
text-align: right;
`;

export const TableData = styled.td`
`;

export const TablePhone = styled(TableData)`
direction: ltr;
text-align: right;
`;
