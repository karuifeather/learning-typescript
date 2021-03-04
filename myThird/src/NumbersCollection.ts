export class NumbersCollection {
  constructor(public data: number[]) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return this.data[leftIndex] > this.data[leftIndex + 1];
  }

  sort(leftHandIndex: number) {
    const leftHand = this.data[leftHandIndex];
    this.data[leftHandIndex] = this.data[leftHandIndex + 1];
    this.data[leftHandIndex + 1] = leftHand;
  }
}
