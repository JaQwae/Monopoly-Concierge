import express from 'express';
import { sendEmail } from '../services/nodemailer.mjss';
const router = express.Router();

router.post('/form', async (req, res) => {
    const { data } = req.body;
    sendEmail(data, res);
});

export default router;