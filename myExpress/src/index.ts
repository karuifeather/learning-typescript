import express from 'express';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter.js';
import './controllers/LoginController.js';
import './controllers/RootController.js';
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieSession({ keys: ['kjshefkuhe'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Server running on port 3000...');
});
