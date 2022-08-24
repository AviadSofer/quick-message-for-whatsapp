const getToken = async (credentials: {userName: string, password: string}) => fetch('/api/signin', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(credentials),
}).then((data) => data.json())
  .then((data) => data.message);

export default getToken;
