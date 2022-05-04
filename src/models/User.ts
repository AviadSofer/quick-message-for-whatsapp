import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IUser {
  _id: mongoose.Types.ObjectId,
  mail: string;
  userName: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  mail: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true,
  },
  userName: {
    type: String, required: true, unique: true,
  },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>('users', userSchema);

export { User, IUser };
