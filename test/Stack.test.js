"use strict";
exports.__esModule = true;
var Stack_1 = require("../Stack");
var stack = new Stack_1["default"](5);
stack.push(8);
stack.push(7);
stack.push(2);
console.log(stack.min());
