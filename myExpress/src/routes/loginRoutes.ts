import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

const protect = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send(`<h2>Forbidden.</h2>`);
};

router;

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'h@h.com' && password === 'p') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('<h1>Wrong credentials.</h1>');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div>
            <h1>You\'re logged in.</h1>
            <a href="/logout">Logout</a>
        </div>`);
  } else {
    res.send(`
        <div>
            <h1>You\'re not logged in.</h1>
            <a href="/login">Login</a>
        </div>`);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', protect, (req: Request, res: Response) => {
  res.send(`You are in!!`);
});

export { router };
