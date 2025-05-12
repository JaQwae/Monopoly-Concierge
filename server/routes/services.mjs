import express from 'express';
const router = express.Router();

router.get('/form', (req, res) => {
    res.json({ message: 'Properly linked service form route' });
})

export default router;