import bcrypt from 'bcrypt';
import { User } from '../models/User';

const checkUser = async (userName: string, password: string) => {
  // validate the user name
  const user = await User.find({ userName });
  if (user.length === 0) throw new Error('auth failed');

  // validate the password
  const match = await bcrypt.compare(password, user[0].hashedPassword);
  if (!match) throw new Error('auth failed');

  return user;
};

export default checkUser;
