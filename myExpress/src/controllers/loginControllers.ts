import { Request, Response } from 'express';
import { controller } from './decorators/controller.js';
import { get } from './decorators/routes.js';

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
}
