export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(propName: K): T[K] => {
    return this.data[propName];
  };

  set = (changes: T): void => {
    Object.assign(this.data, changes);
  };

  getAll(): T {
    return this.data;
  }
}
