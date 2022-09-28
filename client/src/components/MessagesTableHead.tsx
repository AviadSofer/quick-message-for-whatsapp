import { IconButton } from '@mui/material';
import { useState } from 'react';
import Columns from '../static/columns';
import { TableHead, TH, Arrows } from './styles/MessagesTable.styled';
import { Message } from './MessagesTable';
import { useSavedMessages } from '../contexts/SavedMessages';

const MessagesTableHead: React.FC = () => {
  const { savedMessages, setSavedMessages } = useSavedMessages();

  const [sort, setSort] = useState(false);

  const sortData = (accessor: string) => {
    const lastToFirst = [...savedMessages]
      .sort((a, b) => (`${a[accessor as keyof Message]}`)
        .localeCompare(b[accessor as keyof Message]));
    const firstToLast = [...savedMessages]
      .sort((a, b) => (`${b[accessor as keyof Message]}`)
        .localeCompare(a[accessor as keyof Message]));
    setSavedMessages(sort ? firstToLast : lastToFirst);
    setSort(!sort);
  };

  return (
    <TableHead>
      <tr>
        {Columns.map(({ Header, accessor, width }) => (
          <TH key={accessor} width={width}>
            {Header}
            <IconButton onClick={() => sortData(accessor)}>
              <Arrows />
            </IconButton>
          </TH>
        ))}
      </tr>
    </TableHead>
  );
};

export default MessagesTableHead;
