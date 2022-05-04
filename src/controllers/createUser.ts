import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { User, IUser } from '../models/User';

const createUser = async (mail: string, userName: string, password: string) => {
  // bcrypt password
  const hashedPassword = await bcrypt.hash(password, 10);

  // creating new user
  const user = new User<IUser>({
    _id: new mongoose.Types.ObjectId(),
    mail,
    userName,
    password: hashedPassword,
  });

  // save it to the DB
  await user.save();

  return user.userName;
};

export default createUser;
