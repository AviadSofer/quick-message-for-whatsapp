import useSWR from 'swr';

const fetcher = async (url: string) => fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((res) => res.json());

const LastMessages: React.FC = () => {
  const { data, error } = useSWR('/api/get-user-profile', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>{data.fullName}</div>
  );
};

export default LastMessages;
