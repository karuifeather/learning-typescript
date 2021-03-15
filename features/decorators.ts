@classDecorator
class Boat {
  // @checkingThisDecoratorThing
  color = 'navyBlue';

  // @checkingThisDecoratorThing
  /*Apparently getters are no longer included in prototypes */
  get formattedColor(): string {
    return `The color of the boat is ${this.color}`;
  }

  @logError('some message....hahahaha')
  throwError(): void {
    throw new Error('Some error...');
  }

  @checkingThisDecoratorThing
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator isPilotEvenThere: boolean
  ): void {
    if (speed == 'slow') console.log('Vrooom!!');
    else console.log('Swoooooooo!!!');
  }
}

function classDecorator(constructor: typeof Boat): void {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(message);
      }
    };
  };
}

function checkingThisDecoratorThing(target: any, key: string): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
  // console.log(target.color); /*This won't work. Can you guess why? */
}

// new Boat().throwError();

// /*This function right here is what calls
//  * our list of decorators and passes in all
//  * the parameters
//  */
// const __decorate = function (decorators, target, key, desc) {
//   const desc = Object.getOwnPropertyDescriptor(target, key);

//   for (let decorator of decorators) {
//     decorator(target, key, desc); /* We can literally do it by ourself and we will still get the same result without the use of decorators */
//   }
// };

/**
 * Property Descriptors for Methods
 *
 * writable         // whether or not this property can be changed
 * enumerable       // whether or not this can get looped over
 * value            // current value
 * configurable     // Property definition can be changed and property can be deleted
 *
 */
