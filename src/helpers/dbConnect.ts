import mongoose from 'mongoose';
import 'dotenv/config';

function dbConnect() {
  mongoose.connect(`${process.env.MONGO_URL}`);
  return mongoose.connection;
}

function dbClose() {
  return mongoose.disconnect();
}

export { dbConnect, dbClose };
