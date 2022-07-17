/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import fetchData from '../hook/fetchData';
import {
  Table, TableHead, TableWrap, TablePhone, TableDate, TableMessage, ThContainer, Arrows, TableMessageContainer, Keyboard,
} from './styles/LastMessages.styled';
import Columns from '../static/columns';
import { useNumberContext } from '../NumberContext';

const LastMessages: React.FC = () => {
  const { changePrefix, changePhone, changeMessage } = useNumberContext();
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(false);
  useEffect(() => {
    (async () => {
      const rows = await fetchData('/api/get-messages');
      setData(rows); // set tableData to array
    })();
  }, []);
  const sortData = (accessor: string) => {
    const lastToFirst = [...data].sort((a, b) => (`${a[accessor]}`).localeCompare(b[accessor]));
    const firstToLast = [...data].sort((a, b) => (`${b[accessor]}`).localeCompare(a[accessor]));
    setData(sort ? firstToLast : lastToFirst);
    setSort(!sort);
  };
  const sendRow = (phoneNumber: string, textMessage: string) => {
    changePrefix(`${phoneNumber.slice(1, 4)}`);
    changePhone(`${phoneNumber.slice(5, 7)}${phoneNumber.slice(8, 11)}${phoneNumber.slice(12, 16)}`);
    changeMessage(textMessage);
  };
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
              <TableMessage key="textMessage">
                <TableMessageContainer>
                  {textMessage || '—'}
                  <IconButton onClick={() => sendRow(phoneNumber, textMessage)}><Keyboard /></IconButton>
                </TableMessageContainer>
              </TableMessage>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default LastMessages;
