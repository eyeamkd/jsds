"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    function Stack(value) {
        this.minValue = Number.MAX_VALUE;
        this.linkedList = new LinkedList_1.LinkedList(value);
        this.checkMin(value);
    }
    Stack.prototype.push = function (node) {
        this.checkMin(node);
        this.linkedList.append(node);
    };
    Stack.prototype.pop = function () {
        return this.linkedList.pop();
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
        console.log("The value to check is", node, "with ", this.minValue);
        if (node < this.minValue)
            this.minValue = node;
    };
    return Stack;
}());
exports["default"] = Stack;
