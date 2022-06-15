import useSWR from 'swr';
import fetchData from '../hook/fetchData';
import { Explain } from './styles/Home.styled';

const HelloProfile: React.FC = () => {
  const { data, error } = useSWR('/api/get-user-profile', fetchData);
  if (error) return <span>שגיאה :(</span>;
  if (!data) return <span>בטעינה...</span>;
  const firstName = `${data.fullName}`.split(' ')[0];
  return (
    <Explain>
      היי
      {' '}
      {firstName}
      , רוצה לשלוח הודעה?
    </Explain>
  );
};

export default HelloProfile;
