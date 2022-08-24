import { IconButton } from '@mui/material';
import { useState } from 'react';
import Columns from '../static/columns';
import { TableHead, TH, Arrows } from './styles/MessagesTable.styled';

interface Props {
  data: never[]
  setData: (newData: never[]) => void
}

const MessagesTableHead: React.FC<Props> = ({ data, setData }) => {
  const [sort, setSort] = useState(false);
  const sortData = (accessor: string) => {
    const lastToFirst = [...data].sort((a, b) => (`${a[accessor]}`).localeCompare(b[accessor]));
    const firstToLast = [...data].sort((a, b) => (`${b[accessor]}`).localeCompare(a[accessor]));
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
