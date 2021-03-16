import { NextFunction, Request, Response } from 'express';

import { get } from './decorators/routes.js';
import { controller } from './decorators/controller.js';
import { use } from './decorators/use.js';

const protect = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send(`<h2>Forbidden.</h2>`);
};

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
          <div>
              <h1>You're logged in.</h1>
              <a href="/auth/logout">Logout</a>
          </div>`);
    } else {
      res.send(`
          <div>
              <h1>You\'re not logged in.</h1>
              <a href="/auth/login">Login</a>
          </div>`);
    }
  }

  @get('/protected')
  @use(protect)
  getProtected(req: Request, res: Response) {
    res.send(`You are in!!`);
  }
}
