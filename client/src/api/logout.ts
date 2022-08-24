const logout = async () => fetch('/api/signout', {
  method: 'DELETE',
}).then((res) => res.json());

export default logout;
