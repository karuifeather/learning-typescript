import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

const numbersArray = new NumbersCollection([-4, 5, 23, -6]);
numbersArray.sort();

console.log(numbersArray.data);

const list = new LinkedList();
list.add(-32);
list.add(42);
list.add(47);
list.add(-1);
list.add(57);

list.sort();
list.print();
