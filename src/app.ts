import express, { Application } from 'express';
import 'dotenv/config';
import path from 'path';
import cookieParser from 'cookie-parser';
import { dbConnect } from './helpers/dbConnect';
import logger from './logger/logger';
import signUp from './routes/api/signUp';
import signIn from './routes/api/signIn';
import auth from './middlewares/authenticateToken';
import getUserProfile from './routes/api/getUserProfile';
import getMessages from './routes/api/getMessages';
import signOut from './routes/api/signOut';

const app: Application = express();

// port
const port = process.env.PORT || 5000;

// connect to the db
dbConnect();

// add middlewares and routs
app.use(express.json());
app.use(cookieParser());
app.use('/api/signup', signUp);
app.use('/api/signin', signIn);
app.use('/api/signout', signOut);
app.use('/api/get-user-profile', auth, getUserProfile);
app.use('/api/get-messages', auth, getMessages);
app.use(express.static(path.join(path.resolve(), 'client', 'dist')));

// start express server on port 5000
app.listen(port, () => {
  logger.info(`server started on port ${port}`);
});

export default app;
