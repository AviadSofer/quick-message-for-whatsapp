import express, { Application } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import path from 'path';
import getMessages from './routes/api/getMessages';
import signUp from './routes/api/signUp';

const app: Application = express();

// port
const port = process.env.PORT || 5000;

// connect to the db
mongoose.connect(`${process.env.MONGO_URL}`);
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

// add middleware
app.use(express.json());
app.use('/api/get-messages', getMessages);
app.use('/api/signup', signUp);
app.use(express.static(path.join(path.resolve(), 'client', 'dist')));

// start express server on port 5000
app.listen(port, () => {
  console.log('server started on port 5000');
});
