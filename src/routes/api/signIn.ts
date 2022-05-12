import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from '../../logger/logger';
import checkUser from '../../controllers/signInValidation';

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  // validate user, and send token to the client
  try {
    const user = await checkUser(userName, password);
    const token = jwt.sign({ user }, `${process.env.JWT_KEY}`, { expiresIn: '24h' });
    res.status(200).json({
      token,
    });
    logger.info(`token:${token} created :)`);
  } catch (err) {
    res.status(401).json({
      message: 'auth failed',
    });
    logger.error(err);
    throw err;
  }
});

export default router;
