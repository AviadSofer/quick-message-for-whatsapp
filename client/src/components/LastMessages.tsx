import { useEffect, useState } from 'react';
import fetchData from '../hook/fetchData';
import {
  Table, TableHead, TableBody, TableRow, TableData, TH, TablePhone, TableWrap,
} from './styles/LastMessages.styled';
import Columns from '../static/columns';

const LastMessages: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const rows = await fetchData('/api/get-messages');
      setData(rows); // set tableData to array
    })();
  }, []);
  return (
    <TableWrap>
      <Table>
        <TableHead>
          <TableRow>
            {Columns.map(({ Header, accessor }) => <TH key={accessor}>{Header}</TH>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: { date: string; phoneNumber: string; textMessage: string }) => {
            const date = new Date(row.date);
            return (
              <TableRow>
                <TableData>{`${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`}</TableData>
                <TablePhone>{row.phoneNumber}</TablePhone>
                <TableData>{row.textMessage}</TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableWrap>
  );
};

export default LastMessages;
