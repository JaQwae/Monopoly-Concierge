import express from 'express';
const router = express.Router();

router.get('/analytics-key', async (req, res) => {
    res.json({ id: process.env.GOOGLE_ANALYTICS_ID });
});

export default router;