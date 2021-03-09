import { User } from './models/User';

const user = new User({ name: 'Aashaya', age: 20 });

console.log(user.get('name'));

user.on('chan', () => {
  console.log('eafds');
});

user.trigger('chan');
