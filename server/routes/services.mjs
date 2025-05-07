import express from 'express';
const router = express.Router();

router.get('/form', (req, res) => {
    res.send('Properly linked service form route')
})

export default router;