const fetchData = async (url: string) => fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((res) => res.json());

export default fetchData;
