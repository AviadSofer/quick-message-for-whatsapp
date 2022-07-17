import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import logger from '../../logger/logger';
import { Message, IMessage } from '../../models/Message';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { userName } = req.body.decoded.user;
    const allMessages = await Message.find({ userName }).sort('-date');
    res.status(200).json(allMessages);
  } catch (err) {
    res.status(500).json({
      message: 'something wrong :(',
    });
    logger.error(err);
    throw err;
  }
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
    res.status(401).json({
      message: 'saved failed',
      error: `${err}`,
    });
    logger.error(err);
  }
});

export default router;
