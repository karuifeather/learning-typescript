import express from 'express';
import { router } from './routes/loginRoutes.js';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter.js';
import './controllers/loginControllers.js';
var app = express();
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieSession({ keys: ['kjshefkuhe'] }));
app.use(router);
app.use(AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Server running on port 3000...');
});
