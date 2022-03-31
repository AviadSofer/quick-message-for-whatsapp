import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
  date: String,
  number: String,
  message: String,
});

const Message = mongoose.model('messages', messageSchema);

export default Message;
