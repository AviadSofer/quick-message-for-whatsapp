import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetchData from '../api/fetchData';
import Loading from './styles/Loading.styled';
import { MediumTitle } from './styles/Title.styled';

const HelloUser: React.FC = () => {
  const [greet, setGreet] = useState('');
  const { data, error } = useSWR('/api/get-user-profile', fetchData);
  useEffect(() => {
    const day = new Date();
    const hr = day.getHours();
    if (hr >= 5 && hr < 12) {
      setGreet('בוקר טוב');
    } else if (hr >= 12 && hr <= 17) {
      setGreet('צהריים טובים');
    } else if (hr >= 17 && hr <= 22) {
      setGreet('ערב טוב');
    } else {
      setGreet('לילה טוב');
    }
  }, []);
  if (error) return <MediumTitle>שגיאה :(</MediumTitle>;
  if (!data) return <Loading />;
  const firstName = `${data.fullName}`.split(' ')[0];
  return (
    <MediumTitle>
      {greet}
      {' '}
      {firstName}
      {' '}
      :)
    </MediumTitle>
  );
};

export default HelloUser;
