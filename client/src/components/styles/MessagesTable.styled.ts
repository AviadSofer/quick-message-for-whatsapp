import styled from 'styled-components';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export const TableWrap = styled.div`
max-height: 70vh;
width: 100%;
overflow: auto;
border: 3px solid ${({ theme }) => theme.green};

@media (max-width: 768px) {
  border: 0;
}
`;

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
background-color: ${({ theme }) => theme.backgrounds.secondary};

* {
  font-size: 0.6rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
}

tr:nth-child(even) {
  background-color: ${({ theme }) => theme.backgrounds.thirdary};
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
width: 15%;
text-align: ${({ theme }) => ((theme.i18n.dir() === 'ltr') ? 'center' : 'right')};
color: white;
padding: 9px 5px 9px 0;
font-size: 0.7rem;
font-weight: normal;

@media (max-width: 768px) {
  width: ${({ width }) => `${width}%`};
  font-size: 0.65rem;
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
text-align: ${({ theme }) => ((theme.i18n.dir() === 'ltr') ? 'center' : 'right')};

@media (max-width: 768px) {
  padding: 10px;
  white-space: pre-line;
  text-align: ${({ theme }) => ((theme.i18n.dir() === 'ltr') ? 'left' : 'right')};
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
text-align: ${({ theme }) => ((theme.i18n.dir() === 'ltr') ? 'left' : 'right')};
`;

export const MessageText = styled.div`
flex: 1;
`;
