"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var LinkedList_1 = require("./LinkedList");
var StackOfStacks = /** @class */ (function () {
    function StackOfStacks(thresholdValue, firstElement) {
        this.thresholdValue = thresholdValue;
        this.stack = new Stack_1["default"](firstElement);
        this.stackOfStacks = new LinkedList_1.LinkedList(this.stack);
        // this.stackOfStacks = new StackOfStacks(thresholdValue,firstElement);
    }
    StackOfStacks.prototype.changeThreshold = function (newValue) {
        if (newValue > this.thresholdValue) {
            this.thresholdValue = newValue;
        }
    };
    StackOfStacks.prototype.addStack = function (stack) {
        this.stackOfStacks.append(stack);
    };
    StackOfStacks.prototype.pop = function () {
        return this.stack.pop();
    };
    StackOfStacks.prototype.push = function (element) {
        if (this.stack.size() == this.thresholdValue || this.stack == null) {
            this.stack = new Stack_1["default"](element);
            this.addStack(this.stack);
        }
        else
            this.stack.push(element);
    };
    return StackOfStacks;
}());
exports["default"] = StackOfStacks;
