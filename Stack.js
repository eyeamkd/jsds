"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    function Stack(value) {
        this.minValue = Number.MAX_VALUE;
        this.stackSize = 0;
        this.linkedList = new LinkedList_1.LinkedList(value);
        this.checkMin(value);
        this.stackSize += 1;
    }
    Stack.prototype.push = function (node) {
        this.checkMin(node);
        this.linkedList.append(node);
        this.stackSize += 1;
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            this.stackSize -= 1;
            return this.linkedList.pop();
        }
    };
    Stack.prototype.isEmpty = function () {
        return this.linkedList.Head != null ? false : true;
    };
    Stack.prototype.peek = function () {
        return this.linkedList.latest.value;
    };
    Stack.prototype.min = function () {
        return this.minValue;
    };
    Stack.prototype.checkMin = function (node) {
        if (node < this.minValue)
            this.minValue = node;
    };
    Stack.prototype.size = function () {
        return this.stackSize;
    };
    return Stack;
}());
exports["default"] = Stack;
