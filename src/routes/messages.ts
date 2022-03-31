import express, { Request, Response, Router } from 'express';
import { Message } from "../models/message";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const allMessages = await Message.find({});
    res.json(allMessages);
});

router.post('/', async (req: Request, res: Response) => {
    const { date, number, message } = req.body;
    Message.create({
        date,
        number,
        message
    }, (err) => {
        if (err) throw err;
        res.json(`${req.body.number} saved:)`)
    })
})

export default router;
