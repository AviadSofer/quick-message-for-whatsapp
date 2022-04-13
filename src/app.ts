import express, { Application } from 'express';
import 'dotenv/config';
import path from 'path';
import { dbConnect } from './helpers/dbConnect';
import logger from './logger/logger';
import getMessages from './routes/api/getMessages';
import signUp from './routes/api/signUp';

const app: Application = express();

// port
const port = process.env.PORT || 5000;

// connect to the db
dbConnect().on('connected', () => logger.info('MongoDB connected'));

// add middleware
app.use(express.json());
app.use('/api/get-messages', getMessages);
app.use('/api/signup', signUp);
app.use(express.static(path.join(path.resolve(), 'client', 'dist')));

// start express server on port 5000
app.listen(port, () => {
  logger.info(`server started on port ${port}`);
});
