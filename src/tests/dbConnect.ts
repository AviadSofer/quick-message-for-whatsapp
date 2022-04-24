import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const dbConnect = async () => {
  const mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
};

const dbClose = async () => {
  const mongo = await MongoMemoryServer.create();
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
};

export { dbConnect, dbClose };
