import express, { Application } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import getMessages from './routes/getMessages';

const app: Application = express();

// port
const port = process.env.PORT || 5000;

// connect to the db
mongoose.connect('mongodb+srv://admin:1cfC1wzKOn53ZtJc@cluster0.9wxyh.mongodb.net/quick-message-for-whatsapp?retryWrites=true&w=majority');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

// add middleware
app.use(express.json());
app.use('/api/get-messages', getMessages);
app.use(express.static(path.join(path.resolve(), 'client', 'dist')));

// start express server on port 5000
app.listen(port, () => {
  console.log('server started on port 5000');
});
