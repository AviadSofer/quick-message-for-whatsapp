import express, { Request, Response, Router } from 'express';
import logger from '../../logger/logger';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { fullName, mail, userName } = req.body.decoded.user;
    res.status(200).json({ fullName, mail, userName });
  } catch (err) {
    res.status(500).json({
      message: 'something wrong :(',
    });
    logger.error(err);
    throw err;
  }
});

export default router;
