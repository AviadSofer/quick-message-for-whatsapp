import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import User from '../../models/User';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { mail, userName, password } = req.body;

  // check if the mail/userName is already exist in the DB
  const findMail = await User.find({ mail });
  const findUserName = await User.find({ userName });
  if (findMail.length > 0) {
    res.status(409).json(`the email ${userName} is already exist :(`);
    throw new Error(`someone try to register, but his mail:${mail} is already used :(`);
  }
  if (findUserName.length > 0) {
    res.status(409).json(`the user ${userName} is already exist :(`);
    throw new Error(`someone try to register, but his user:${userName} is already used :(`);
  }

  // creating new user
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    mail,
    userName,
    password,
  });

  // save it to the DB
  try {
    await user.save();
    res.status(201).json(`success, user:${user.userName} created :)`);
    console.log(`the user id ${user._id} created :)`);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
});

export default router;
