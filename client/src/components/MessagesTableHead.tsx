import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableHead, TH, Arrows } from './styles/MessagesTable.styled';
import { Message } from './MessagesTable';
import { useSavedMessages } from '../contexts/SavedMessages';

const MessagesTableHead: React.FC = () => {
  const { t } = useTranslation();

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

  const Columns = [
    {
      Header: t('MessageTable.date'),
      accessor: 'date',
      width: 20,
    },
    {
      Header: t('MessageTable.phoneNumber'),
      accessor: 'phoneNumber',
      width: 30,
    },
    {
      Header: t('MessageTable.textMessage'),
      accessor: 'textMessage',
      width: 40,
    },
  ];

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
