"use strict";
exports.__esModule = true;
var StackOfStacks_1 = require("../StackOfStacks");
var stackOfStacks = new StackOfStacks_1["default"](5, 1);
for (var i = 2; i <= 10; i++) {
    stackOfStacks.push(i);
}
console.log(stackOfStacks.pop());
