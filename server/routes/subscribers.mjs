import express from 'express';
import { addEmailSubscriber } from '../mailchimp.mjs';
const router = express.Router();

router.use(express.json());

router.post('/', async (req, res) => {
    const { data } = req.body;
    addEmailSubscriber(data);
});

export default router;
