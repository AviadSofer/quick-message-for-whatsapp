const createUser = async (
  credentials: {
    fullName: string,
    mail: string,
    userName: string,
    password: string},
) => fetch('/api/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(credentials),
}).then((data) => data.json())
  .then((data) => data.token);

export default createUser;
