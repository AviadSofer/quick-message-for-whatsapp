import mongoose from 'mongoose';
import 'dotenv/config';
import logger from '../logger/logger';

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
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
