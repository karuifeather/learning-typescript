import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftHandIndex: number, rightHandIndex: number) {
    const leftHand = this.data[leftHandIndex];
    this.data[leftHandIndex] = this.data[rightHandIndex];
    this.data[rightHandIndex] = leftHand;
  }
}
