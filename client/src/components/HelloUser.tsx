import useSWR from 'swr';
import fetchData from '../api/fetchData';
import StyledHelloUser from './styles/HelloUser.styled';

const HelloUser: React.FC = () => {
  const { data, error } = useSWR('/api/get-user-profile', fetchData);
  if (error) return <StyledHelloUser>שגיאה :(</StyledHelloUser>;
  if (!data) return <StyledHelloUser>בטעינה...</StyledHelloUser>;
  const firstName = `${data.fullName}`.split(' ')[0];
  return (
    <StyledHelloUser>
      היי
      {' '}
      {firstName}
      ,
      ההודעות האחרונות ששלחת כאן
    </StyledHelloUser>
  );
};

export default HelloUser;
