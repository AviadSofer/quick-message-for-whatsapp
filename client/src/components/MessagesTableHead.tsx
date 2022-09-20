import { IconButton } from '@mui/material';
import { useState } from 'react';
import Columns from '../static/columns';
import { TableHead, TH, Arrows } from './styles/MessagesTable.styled';
import { Message } from './MessagesTable';

interface Props {
  data: Message[]
  setData: (newData: Message[]) => void
}

const MessagesTableHead: React.FC<Props> = ({ data, setData }) => {
  const [sort, setSort] = useState(false);
  const sortData = (accessor: string) => {
    const lastToFirst = [...data]
      .sort((a, b) => (`${a[accessor as keyof Message]}`)
        .localeCompare(b[accessor as keyof Message]));
    const firstToLast = [...data]
      .sort((a, b) => (`${b[accessor as keyof Message]}`)
        .localeCompare(a[accessor as keyof Message]));
    setData(sort ? firstToLast : lastToFirst);
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
