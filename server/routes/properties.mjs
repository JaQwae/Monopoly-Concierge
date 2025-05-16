import express from 'express';
import { sendEmail } from '../services/nodemailer.mjs';
const router = express.Router();

router.post('/form', async (req, res) => {
    const { data } = req.body;
    sendEmail(data, res);
});

export default router;