"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbersArray = new NumbersCollection_1.NumbersCollection([-4, 5, 23, -6, 4, 1, -2, -123, 2]);
var sorter = new Sorter_1.Sorter(numbersArray);
sorter.sort();
console.log(numbersArray.data);
