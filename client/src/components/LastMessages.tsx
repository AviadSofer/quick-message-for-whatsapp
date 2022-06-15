import useSWR from 'swr';
import fetchData from '../hook/fetchData';

const LastMessages: React.FC = () => {
  const { data, error } = useSWR('/api/get-messages', fetchData);
  if (error) return <span>שגיאה :(</span>;
  if (!data) return <span>בטעינה...</span>;

  return (
    <span>{data[0].date}</span>
  );
};

export default LastMessages;
