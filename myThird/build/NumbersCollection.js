"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex) {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    };
    NumbersCollection.prototype.sort = function (leftHandIndex) {
        var leftHand = this.data[leftHandIndex];
        this.data[leftHandIndex] = this.data[leftHandIndex + 1];
        this.data[leftHandIndex + 1] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
