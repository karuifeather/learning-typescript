abstract class MyArray<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

class ArrayofNumbers extends MyArray<number> {}

class ArrayofString extends MyArray<string> {}

// You can use generics with functions too!!!

function printData<T>(arr: T[]): void {
  for (let val of arr) {
    console.log(val);
  }
}

printData<number>([1, 2, 3, 4]);

// Like so.
