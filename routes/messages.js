import express from "express";

const router = express.Router();

router.get('/', ((req, res) => {
    res.json('Hi!')
}));

router.post('/', ((req, res) => {
    req.body()
}))

export default router;
