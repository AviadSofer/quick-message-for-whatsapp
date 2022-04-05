import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mail: {
    type: String,
    require: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true,
  },
  userName: {
    type: String, require: true, unique: true,
  },
  password: { type: String, require: true },
});

const User = mongoose.model('users', userSchema);

export default User;
