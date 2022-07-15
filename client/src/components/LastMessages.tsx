/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import fetchData from '../hook/fetchData';
import {
  Table, TableHead, TableWrap, TablePhone, TableDate, TableMessage, ThContainer, Arrows,
} from './styles/LastMessages.styled';
import Columns from '../static/columns';

const LastMessages: React.FC = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(false);
  const sortData = (accessor: string) => {
    const firstToLast = [...data].sort((a, b) => (`${a[accessor]}`).localeCompare(b[accessor]));
    const lastToFirst = [...data].sort((a, b) => (`${b[accessor]}`).localeCompare(a[accessor]));
    setData(sort ? firstToLast : lastToFirst);
    setSort(!sort);
  };
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
          <tr>
            {Columns.map(({ Header, accessor }) => (
              <th key={accessor}>
                <ThContainer>
                  {Header}
                  <IconButton onClick={() => sortData(accessor)}>
                    <Arrows />
                  </IconButton>
                </ThContainer>
              </th>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {data.map(({
            _id, date, phoneNumber, textMessage,
          }) => (
            <tr key={_id}>
              <TableDate key="date">
                {`${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString('he-IL', {
                  hour12: false,
                  hour: 'numeric',
                  minute: 'numeric',
                })}`}
              </TableDate>
              <TablePhone key="phoneNumber">{phoneNumber}</TablePhone>
              <TableMessage key="textMessage">{textMessage || '—'}</TableMessage>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default LastMessages;
