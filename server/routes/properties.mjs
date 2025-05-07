import express from 'express'
const router = express.Router();

router.get('/form', (req, res) => {
    res.send('Properly linked properties form route')
});

export default router;