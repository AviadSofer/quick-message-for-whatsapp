const deleteMessageById = async (_id: string) => fetch('/api/get-messages', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ _id }),
});

export default deleteMessageById;
