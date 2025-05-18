import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import db from '../db';
import multer from 'multer';
import path from 'path';

const router = Router();
const upload = multer({
  dest: path.join(__dirname, '../uploads/')
});

router.get('/me', authenticate, (req: any, res) => {
  const user = db.prepare('SELECT id, email, nickname, avatar FROM users WHERE id = ?').get(req.userId);
  res.json(user);
});

router.put('/me/nickname', authenticate, (req: any, res) => {
  const { nickname } = req.body;
  db.prepare('UPDATE users SET nickname = ? WHERE id = ?').run(nickname, req.userId);
  res.sendStatus(200);
});

router.put('/me/avatar', authenticate, upload.single('avatar'), (req: any, res) => {
  const filename = `${req.userId}.jpg`;
  const fs = require('fs');
  const oldPath = req.file.path;
  const newPath = path.join(__dirname, '../uploads/', filename);
  fs.renameSync(oldPath, newPath);
  db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(`/uploads/${filename}`, req.userId);
  res.send({ avatar: `/uploads/${filename}` });
});

export default router;
