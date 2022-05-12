import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import createUser from '../../controllers/createUser';
import {
  isHttpReqUndefind, isMailAlreadyExist, isMailAndUserNameAlradyExist, isUserNameAlradyExist,
} from '../../controllers/signUpValidation';
import logger from '../../logger/logger';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const {
    fullName, mail, userName, password,
  } = req.body;

  // validation
  try {
    isHttpReqUndefind(fullName, mail, userName, password);
  } catch (err) {
    res.status(400).json({
      message: `${err}`,
    });
    logger.error(err);
    throw err;
  }
  try {
    await isMailAndUserNameAlradyExist(mail, userName);
  } catch (err) {
    res.status(409).json({
      message: `${err}`,
    });
    logger.error(err);
    throw err;
  }
  try {
    await isMailAlreadyExist(mail);
  } catch (err) {
    res.status(409).json({
      message: `${err}`,
    });
    logger.error(err);
    throw err;
  }
  try {
    await isUserNameAlradyExist(userName);
  } catch (err) {
    res.status(409).json({
      message: `${err}`,
    });
    logger.error(err);
    throw err;
  }

  // create new user
  try {
    const user = await createUser(fullName, mail, userName, password);
    const token = jwt.sign({ user }, `${process.env.JWT_KEY}`, { expiresIn: '24h' });
    res.status(201).json({
      message: `success, user:${user.userName} created :)`,
      token,
    });
    logger.info(`success, user:${user.userName} created :)`);
    logger.info(`token:${token} created :)`);
  } catch (err) {
    res.status(500).json({
      message: 'created failed',
    });
    logger.error(err);
    throw err;
  }
});

export default router;
