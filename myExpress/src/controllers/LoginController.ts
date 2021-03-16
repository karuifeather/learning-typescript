import { Request, Response } from 'express';
import { controller } from './decorators/controller.js';
import { get, post } from './decorators/routes.js';
import { bodyValidator } from './decorators/bodyValidator.js';
// import { use } from './decorators/use.js';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input type="email" name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  post(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'h@h.com' && password === 'p') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('<h1>Wrong credentials.</h1>');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
