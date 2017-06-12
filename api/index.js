import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/torches', (req, res) => {
	res.send({ torches: data.torches });
});

export default router;