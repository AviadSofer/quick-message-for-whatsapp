import { useEffect, useState } from 'react';
import fetchData from '../api/fetchData';
import Loading from './styles/Loading.styled';
import MessagesTableHead from './MessagesTableHead';
import MessagesTableBody from './MessagesTableBody';
import {
  Table, TableWrap, TD, TDContainer,
} from './styles/MessagesTable.styled';

const MessagesTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const rows = await fetchData('/api/get-messages');
      setData(rows); // set tableData to array
      setIsLoading(false);
    })();
  }, []);

  return (
    <TableWrap>
      <Table>
        <MessagesTableHead data={data} setData={setData} />
        {isLoading
          ? (
            <tbody>
              <tr>
                <TD colSpan={3}>
                  <TDContainer>
                    <Loading />
                  </TDContainer>
                </TD>
              </tr>
            </tbody>
          )
          : <MessagesTableBody data={data} setData={setData} />}
      </Table>
    </TableWrap>
  );
};

export default MessagesTable;
