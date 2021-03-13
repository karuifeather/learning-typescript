import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Details</h1>
        <h2>Name : ${this.model.get('name')}</h2>
        <h2>Age : ${this.model.get('age')}</h2>
      </div>
    `;
  }
}
