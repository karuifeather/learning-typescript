import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersArray = new NumbersCollection([-4, 5, 23, -6, 4, 1, -2, -123, 2]);

const sorter = new Sorter(numbersArray);

sorter.sort();

console.log(numbersArray.data);
