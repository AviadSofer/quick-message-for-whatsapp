import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import logger from '../../logger/logger';
import { User, IUser } from '../../models/User';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { mail, userName, password } = req.body;

  // check if some of the fields === undefind
  if (!mail || !userName || !password) {
    res.status(400).json('You have to whrite user name, email and password');
    logger.error('someone try to register, but forget fill all fields :(');
    throw new Error('someone try to register, but forget fill all fields :(');
  }

  // check if the mail/userName is already exist in the DB
  const findMail = await User.find({ mail });
  const findUserName = await User.find({ userName });
  if (findMail.length > 0) {
    res.status(409).json(`the email ${userName} is already exist :(`);
    logger.error(`someone try to register, but his mail:${mail} is already used :(`);
    throw new Error(`someone try to register, but his mail:${mail} is already used :(`);
  }
  if (findUserName.length > 0) {
    res.status(409).json(`the user ${userName} is already exist :(`);
    logger.error(`someone try to register, but his user:${userName} is already used :(`);
    throw new Error(`someone try to register, but his user:${userName} is already used :(`);
  }

  // creating new user
  const user = new User<IUser>({
    _id: new mongoose.Types.ObjectId(),
    mail,
    userName,
    password,
  });

  // save it to the DB
  try {
    await user.save();
    res.status(201).json(`success, user:${user.userName} created :)`);
    logger.info(`the user id ${user._id} created :)`);
  } catch (err) {
    res.status(500).json({ err });
    logger.error(err);
  }
});

export default router;
