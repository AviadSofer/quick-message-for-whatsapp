import { useEffect, useState } from 'react';
import fetchData from '../api/fetchData';
import Loading from './styles/Loading.styled';
import MessagesTableHead from './MessagesTableHead';
import MessagesTableBody from './MessagesTableBody';
import {
  Table, TableWrap, TD, TDContainer,
} from './styles/MessagesTable.styled';
import { useSavedMessages } from '../contexts/SavedMessages';

export interface Message {
  _id: string,
  date: string,
  userName: string,
  phoneNumber: string,
  textMessage: string
}

const MessagesTable: React.FC = () => {
  const { setSavedMessages } = useSavedMessages();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const messagesList = await fetchData('/api/get-messages');
      setSavedMessages(messagesList);
      setIsLoading(false);
    })();
  }, []);

  return (
    <TableWrap>
      <Table>
        <MessagesTableHead />
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
          : <MessagesTableBody />}
      </Table>
    </TableWrap>
  );
};

export default MessagesTable;
