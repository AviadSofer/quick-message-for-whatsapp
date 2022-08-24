const saveMessage = async (prefix: string, phone: string, message?: string) => fetch('/api/get-messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    phoneNumber: `+${prefix} ${phone.slice(0, 2)}-${phone.slice(2, 5)}-${phone.slice(5, 9)}`,
    textMessage: message,
  }),
});

export default saveMessage;
