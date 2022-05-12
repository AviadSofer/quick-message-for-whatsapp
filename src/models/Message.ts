import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IMessage {
  _id: mongoose.Types.ObjectId;
  date: Date;
  userName: string;
  phoneNumber: string;
  textMessage: string;
}

const messageSchema = new Schema<IMessage>({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  date: { type: Date, required: true },
  userName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  textMessage: { type: String, required: true },
});

const Message = mongoose.model('messages', messageSchema);

export { Message, IMessage };
