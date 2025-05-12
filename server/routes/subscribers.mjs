import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: ' Properly linked mail chimp subscriber router'});
})

export default router;