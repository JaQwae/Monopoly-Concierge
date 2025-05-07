import express from 'express';
const router = express.Router();

router.get('/form', (req, res) => {
    res.send('Properly linked charter form route')
})

export default router;