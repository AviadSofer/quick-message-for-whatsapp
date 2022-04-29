import mongoose from 'mongoose';
import { User, IUser } from '../models/User';

const createUser = async (mail: string, userName: string, password: string) => {
  // creating new user
  const user = new User<IUser>({
    _id: new mongoose.Types.ObjectId(),
    mail,
    userName,
    password,
  });

  // save it to the DB
  await user.save();

  return user.userName;
};

export default createUser;
