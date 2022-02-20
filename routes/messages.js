import express from "express";
import { Message } from "../models/message.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const allMessages = await Message.find({});
    res.json(allMessages);
});

router.post('/', async (req, res) => {
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
