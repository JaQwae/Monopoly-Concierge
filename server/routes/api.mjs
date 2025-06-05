import express from 'express';
import dotenv from 'dotenv';
const router = express.Router();
dotenv.config();

router.get('/analytics-key', async (req, res) => {
    res.json({ id: process.env.GOOGLE_ANALYTICS_ID });
});

export default router;