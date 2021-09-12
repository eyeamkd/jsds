"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    function Stack() {
        this.listSize = 0;
    }
    Stack.prototype.push = function (node) {
        if (this.linkedList == undefined) {
            this.linkedList = new LinkedList_1.LinkedList(node);
        }
        else {
            this.linkedList.append(node);
        }
        this.listSize += 1;
    };
    Stack.prototype.pop = function () {
        this.listSize -= 1;
        return this.linkedList.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this.linkedList.Head != null ? false : true;
    };
    Stack.prototype.peek = function () {
        return this.linkedList.latest.value;
    };
    Stack.prototype.size = function () {
        return this.listSize;
    };
    return Stack;
}());
exports["default"] = Stack;
