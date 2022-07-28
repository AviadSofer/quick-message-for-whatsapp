import useSWR from 'swr';
import fetchData from '../api/fetchData';
import { MediumTitle } from './styles/Title.styled';

const HelloUser: React.FC = () => {
  const { data, error } = useSWR('/api/get-user-profile', fetchData);
  if (error) return <MediumTitle>שגיאה :(</MediumTitle>;
  if (!data) return <MediumTitle>בטעינה...</MediumTitle>;
  const firstName = `${data.fullName}`.split(' ')[0];
  return (
    <MediumTitle>
      היי
      {' '}
      {firstName}
      ,
      ההודעות האחרונות ששלחת כאן
    </MediumTitle>
  );
};

export default HelloUser;
