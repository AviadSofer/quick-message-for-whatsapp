import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import { isHttpReqUndefind, isMailAlreadyExist, isUserNameAlradyExist } from '../../controllers/signUpValidation';
import logger from '../../logger/logger';
import { User, IUser } from '../../models/User';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { mail, userName, password } = req.body;

  // validation
  try {
    isHttpReqUndefind(mail, userName, password);
  } catch (error) {
    res.status(400).json('You have to whrite user name, email and password :(');
    logger.error(error);
    throw error;
  }
  try {
    await isMailAlreadyExist(mail);
  } catch (error) {
    res.status(409).json(`the email ${mail} is already exist :(`);
    logger.error(error);
    throw error;
  }
  try {
    await isUserNameAlradyExist(userName);
  } catch (error) {
    res.status(409).json(`the user ${userName} is already exist :(`);
    logger.error(error);
    throw error;
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
