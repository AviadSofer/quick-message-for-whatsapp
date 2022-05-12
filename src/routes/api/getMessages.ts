import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import logger from '../../logger/logger';
import { Message, IMessage } from '../../models/Message';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const allMessages = await Message.find({});
  res.json(allMessages);
});

router.post('/', async (req: Request, res: Response) => {
  const { decoded, phoneNumber, textMessage } = req.body;

  try {
    // creating new message with Message schema
    const message = new Message<IMessage>({
      _id: new mongoose.Types.ObjectId(),
      date: new Date(),
      userName: decoded.user.userName,
      phoneNumber,
      textMessage,
    });
    // save it in the DB
    await message.save();
    // send to the client
    res.status(201).json({
      message: 'message saved :)',
    });
    logger.info(`message from user:${decoded.user.userName} saved`);
  } catch (err) {
    res.send(err);
    logger.error(err);
  }
});

export default router;
