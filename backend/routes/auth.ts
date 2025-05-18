import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db';

const router = Router();
const SECRET = 'superhemligt';

router.post('/register', async (req, res) => {
  const { email, password, nickname } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const stmt = db.prepare('INSERT INTO users (email, password, nickname) VALUES (?, ?, ?)');
    stmt.run(email, hashed, nickname);
    res.sendStatus(201);
  } catch (err) {
    res.status(400).json({ error: 'Användaren finns redan' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) return res.status(401).json({ error: 'Fel e-post eller lösenord' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Fel e-post eller lösenord' });

  const token = jwt.sign({ id: user.id }, SECRET);
  res.json({ token });
});

export default router;
