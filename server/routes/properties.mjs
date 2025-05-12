import express from 'express'
const router = express.Router();

router.get('/form', (req, res) => {
    res.json({ message: 'Properly linked properties form route' });
});

export default router;