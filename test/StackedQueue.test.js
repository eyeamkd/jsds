"use strict";
exports.__esModule = true;
var StackedQueue_1 = require("../StackedQueue");
var stackedQueue = new StackedQueue_1["default"]();
stackedQueue.push(2);
stackedQueue.push(6);
stackedQueue.push(9);
stackedQueue.push(7);
console.log(stackedQueue.pop());
