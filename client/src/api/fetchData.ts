const fetchData = async (url: string) => fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => res.json());

export default fetchData;
