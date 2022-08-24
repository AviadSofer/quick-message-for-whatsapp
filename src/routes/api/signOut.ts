import express, { Request, Response, Router } from 'express';
import 'dotenv/config';
import logger from '../../logger/logger';

const router: Router = express.Router();

router.delete('/', async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .cookie('token', '', { // delete token cookie
        httpOnly: true,
        maxAge: 0,
      })
      .json({
        message: 'token deleted :)',
      });
    logger.info('user logout, token deleted successfully');
  } catch (err) {
    res.status(500).json({
      message: 'something wrong :(',
    });
    logger.error(err);
    throw err;
  }
});

export default router;
