import { User } from './models/User';

const user = new User({ name: 'new', age: 20 });

user.get('name');