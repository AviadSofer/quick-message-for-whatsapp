const getCookie = (name: string) => {
  const pattern = RegExp(`${name}=.[^;]*`);
  const matched = document.cookie.match(pattern);
  if (matched) {
    const cookie = matched[0].split('=');
    return cookie[1];
  }
  return false;
};

export default getCookie;
