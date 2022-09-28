import express, {
  NextFunction, Request, Response, Router,
} from 'express';
import 'dotenv/config';
import logger from '../../logger/logger';

const router: Router = express.Router();

router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
  const { userName } = req.body.decoded.user;
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
    logger.info(`user:${userName} logout, token deleted successfully, at ${Date.now()}.`);
  } catch (err) {
    res.status(500).json({
      message: `something wrong. logout failed, at ${Date.now()}.`,
    });
    logger.error(`logout failed, at ${Date.now()}. ${err}`);
    next(err);
  }
});

export default router;
