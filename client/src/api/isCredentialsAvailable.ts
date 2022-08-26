export const isMailAvailable = async (mail: string) => fetch('/api/signup/validation/mail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ mail }),
}).then((data) => data.json())
  .then((data) => data.available);

export const isUserNameAvailable = async (userName: string) => fetch('/api/signup/validation/userName', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ userName }),
}).then((data) => data.json())
  .then((data) => data.available);
