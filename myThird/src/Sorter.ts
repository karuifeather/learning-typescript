import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(private collection: NumbersCollection) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j)) {
          this.collection.sort(j);
        }
      }
    }
  }
}
