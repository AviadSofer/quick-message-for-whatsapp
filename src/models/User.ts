import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IUser {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  mail: string;
  userName: string;
  hashedPassword: string;
}

const userSchema = new Schema<IUser>({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  fullName: { type: String, required: true },
  mail: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true,
  },
  userName: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
});

const User = mongoose.model<IUser>('users', userSchema);

export { User, IUser };
