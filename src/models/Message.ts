import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
  userName: String,
  date: String,
  phoneNumber: String,
  message: String,
});

const Message = mongoose.model('messages', messageSchema);

export default Message;
