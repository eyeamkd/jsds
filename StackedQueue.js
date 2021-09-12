"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var StackedQueue = /** @class */ (function () {
    function StackedQueue() {
        this.mainStack = new Stack_1["default"]();
        this.tempStack = new Stack_1["default"]();
    }
    StackedQueue.prototype.push = function (element) {
        this.transfer(this.mainStack, this.tempStack);
        this.mainStack.push(element);
        this.transfer(this.tempStack, this.mainStack);
    };
    StackedQueue.prototype.pop = function () {
        return this.mainStack.pop();
    };
    StackedQueue.prototype.transfer = function (fromStack, toStack) {
        while (fromStack.size() > 0) {
            toStack.push(fromStack.pop());
        }
        return;
    };
    return StackedQueue;
}());
exports["default"] = StackedQueue;
