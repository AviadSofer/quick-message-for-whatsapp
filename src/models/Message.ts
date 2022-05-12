import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IMessage {
  _id: mongoose.Types.ObjectId;
  userName: string;
  date: string;
  phoneNumber: string;
  message: string;
}

const messageSchema = new Schema<IMessage>({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  userName: { type: String, required: true },
  date: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model('messages', messageSchema);

export default Message;
