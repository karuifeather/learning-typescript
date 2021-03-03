let apples: number = 45;
let hasName: string = 'jkldsjafk'
let isNothing: null = null;

let isGone: undefined= undefined;

// built in objects
let date: Date = new Date()

// Array
let colors: string[] = ['red', 'blue', 'green']

// Classes
class Car {}

let car: Car = new Car();

// Objects
let points: {x: number; y: number} = {
  x: 10,
  y: 32
}

// Function
let show: (x: number) => void = (x) => {console.log(x)}

// When to use type annotations
// 1. Function that returns 'any' type
const json = '{"x": 10, "y": 15}'
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 15}

// 2. Variable declaration and initialization on different lines
let word = ['red', 'blue', 'green']
let foundWord: string;

for (let i = 0; i <= word.length; i++) {
  if (word[0] === 'green') {
    foundWord = 'green'
  }
}

// 3. When variable whose type cannot be inferred correctly
let numbers = [1, 2, -34, -2, 3, 6 ]
let foundNumber: boolean | number = false

for (let i = 0; i <numbers.length; i++ ) {
  if (numbers[0] > 1) {
    foundNumber = numbers[0]
  }
}
