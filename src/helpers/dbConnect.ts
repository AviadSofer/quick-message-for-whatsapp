import mongoose from 'mongoose';
import 'dotenv/config';
import logger from '../logger/logger';

const url = 'mongodb+srv://admin:1cfC1wzKOn53ZtJc@cluster0.9wxyh.mongodb.net/quick-message-for-whatsapp?retryWrites=true&w=majority';

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('Failed to connect to MongoDB', err);
  }
};

const dbClose = async () => {
  try {
    await mongoose.connection.close();
  } catch (err) {
    logger.error(err);
  }
};

export { dbConnect, dbClose };
