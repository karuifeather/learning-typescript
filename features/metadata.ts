import 'reflect-metadata';

@printMetadata
class Car {
  color: string = 'red';

  @markFunction('idk right now')
  drive(): void {
    console.log('Vroooom!!!');
  }
}

function markFunction(model: string) {
  return function (target: Car, key: string) {
    Reflect.defineMetadata('model', model, target, key);
  };
}

function printMetadata(target: typeof Car) {
  for (let method in target.prototype) {
    const model = Reflect.getMetadata('model', target.prototype, method);
    console.log(model);
  }
}
