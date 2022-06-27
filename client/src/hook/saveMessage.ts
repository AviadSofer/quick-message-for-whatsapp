const saveMessage = async (prefix: string, phone: string, message?: string) => fetch('/api/get-messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify({
    phoneNumber: `+${prefix} ${phone.slice(0, 2)}-${phone.slice(3, 5)}-${phone.slice(6, 9)}`,
    textMessage: message,
  }),
});

export default saveMessage;
