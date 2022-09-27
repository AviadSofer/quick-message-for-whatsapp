import express, {
  NextFunction, Request, Response, Router,
} from 'express';
import mongoose from 'mongoose';
import logger from '../../logger/logger';
import { Message, IMessage } from '../../models/Message';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName } = req.body.decoded.user;
    const allMessages = await Message.find({ userName }).sort('-date');
    res.status(200).json(allMessages);
  } catch (err) {
    res.status(500).json({
      message: 'something wrong, load messages failed.',
    });
    logger.error(`load messages failed. ${err}`);
    next(err);
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
      message: `message:${message._id} saved, at ${new Date()}.`,
    });
    logger.info(`message:${message._id} from user:${decoded.user.userName} saved, at ${new Date()}.`);
  } catch (err) {
    res.status(401).json({
      message: `saved message failed, at ${new Date()}.`,
      error: `${err}`,
    });
    logger.error(err);
  }
});

router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  const { decoded, _id } = req.body;
  try {
    await Message.deleteOne({ _id });
    res.status(200).json({
      message: `message:${_id} deleted, at ${new Date()}.`,
    });
    logger.info(`message:${_id} from user:${decoded.user.userName} deleted. at ${new Date()}.`);
  } catch (err) {
    res.status(500).json({
      message: 'something wrong!',
    });
    logger.error(err);
    next(err);
  }
});

export default router;
