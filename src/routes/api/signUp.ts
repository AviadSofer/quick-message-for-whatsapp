import express, { Request, Response, Router } from 'express';
import createUser from '../../controllers/createUser';
import {
  isHttpReqUndefind, isMailAlreadyExist, isMailAndUserNameAlradyExist, isUserNameAlradyExist,
} from '../../controllers/signUpValidation';
import logger from '../../logger/logger';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { mail, userName, password } = req.body;

  // validation
  try {
    isHttpReqUndefind(mail, userName, password);
  } catch (err) {
    res.status(400).json('You have to whrite user name, email and password :(');
    logger.error(err);
    throw err;
  }
  try {
    await isMailAndUserNameAlradyExist(mail, userName);
  } catch (err) {
    res.status(409).json(`the email ${mail}, and the user: ${userName} is already exist :(`);
    logger.error(err);
    throw err;
  }
  try {
    await isMailAlreadyExist(mail);
  } catch (err) {
    res.status(409).json(`the email ${mail} is already exist :(`);
    logger.error(err);
    throw err;
  }
  try {
    await isUserNameAlradyExist(userName);
  } catch (err) {
    res.status(409).json(`the user ${userName} is already exist :(`);
    logger.error(err);
    throw err;
  }

  // create new user
  try {
    const user = await createUser(mail, userName, password);
    res.status(201).json(`success, user:${user} created :)`);
    logger.info(`success, user:${user} created :)`);
  } catch (err) {
    res.status(500).json({ err });
    logger.error(err);
    throw err;
  }
});

export default router;
