import useSWR from 'swr';
import fetchData from '../api/fetchData';
import StyledHelloUser from './styles/HelloUser.styled';

const HelloUser: React.FC = () => {
  const { data, error } = useSWR('/api/get-user-profile', fetchData);
  if (error) return <span>שגיאה :(</span>;
  if (!data) return <span>בטעינה...</span>;
  const firstName = `${data.fullName}`.split(' ')[0];
  return (
    <StyledHelloUser>
      היי
      {' '}
      {firstName}
      ,
      הנה ההודעות האחרונות ששלחת,
      תרצה לשלוח הודעה חדשה?
    </StyledHelloUser>
  );
};

export default HelloUser;
