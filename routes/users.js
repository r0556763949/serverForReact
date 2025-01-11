import express from 'express';
import fs from 'fs';
import path from 'path';
import authMiddleware from '../middleware/authMiddleware.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

router.get('/', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    setTimeout(() => res.json(db.users), [2000])
});

export default router;