"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkNode = /** @class */ (function () {
    function LinkNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var newNode = new LinkNode(data);
        if (!this.head) {
            this.head = newNode;
            return newNode;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
        return newNode;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var counter = 1;
            var tail = this.head;
            while (tail.next) {
                counter++;
                tail = tail.next;
            }
            return counter;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index is out of bounds');
        }
        var counter = 0;
        var tail = this.head;
        while (tail) {
            if (counter === index) {
                return tail;
            }
            counter++;
            tail = tail.next;
        }
        throw new Error('Index is out of bounds');
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
