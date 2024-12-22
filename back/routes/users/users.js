import express from 'express';
import dotenv from 'dotenv';
import { WPSync } from 'kiwipress'

const router = express.Router();
const wp = new WPSync();

dotenv.config();
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const wpdata = await wp.get_users(process.env.USERS + '?id=' + id)
    console.log('URL: ' + process.env.USERS + '/' + id);
    return res.json(wpdata[id - 1])
});

router.get('/', async (req, res) => {
    try {
        const response = await fetch(`${process.env.USERS}`);
        const data = await response.json();
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Author data not found' });
        }

        return res.json(data);
    } catch (error) {
        console.error('Error fetching author data:', error);
        return res.status(500).json({ error: 'Failed to fetch author data' });
    }
});

export default router;