import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import fetchData from '../api/fetchData';
import deleteMessageById from '../api/deleteMessageById';
import * as Styled from './styles/LastMessages.styled';
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

  const deleteMessage = async (_id: string) => {
    await deleteMessageById(_id);
    setData([...data].filter((message: { _id: string }) => message._id !== _id));
  };

  const sendMessage = (phoneNumber: string, textMessage: string) => {
    changePrefix(`${phoneNumber.slice(1, 4)}`);
    changePhone(`${phoneNumber.slice(5, 7)}${phoneNumber.slice(8, 11)}${phoneNumber.slice(12, 16)}`);
    changeMessage(textMessage);
  };

  return (
    <Styled.TableWrap>
      <Styled.Table>
        <Styled.TableHead>
          <tr>
            {Columns.map(({ Header, accessor }) => (
              <th key={accessor}>
                <Styled.ThContainer>
                  {Header}
                  <IconButton onClick={() => sortData(accessor)}>
                    <Styled.Arrows />
                  </IconButton>
                </Styled.ThContainer>
              </th>
            ))}
          </tr>
        </Styled.TableHead>

        <tbody>
          {data.map(({
            _id, date, phoneNumber, textMessage,
          }) => (
            <tr key={_id}>
              <Styled.TD width={20}>
                {/* Data */}
                {`${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString('he-IL', {
                  hour12: false,
                  hour: 'numeric',
                  minute: 'numeric',
                })}`}
              </Styled.TD>
              <Styled.TD width={20}>
                {/* Phone */}
                <Styled.TablePhone>
                  {phoneNumber}
                </Styled.TablePhone>
              </Styled.TD>
              <Styled.TD width={40}>
                {/* Text Message */}
                <Styled.TableMessage>
                  <Styled.MessageText>{textMessage || '—'}</Styled.MessageText>
                  <IconButton onClick={() => deleteMessage(_id)}>
                    <Styled.Delete />
                  </IconButton>
                  <IconButton onClick={() => sendMessage(phoneNumber, textMessage)}>
                    <Styled.ArrowDown />
                  </IconButton>
                </Styled.TableMessage>
              </Styled.TD>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.TableWrap>
  );
};

export default LastMessages;
