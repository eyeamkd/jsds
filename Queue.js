"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    function Queue(firstElement) {
        this.linkedList = new LinkedList_1.LinkedList(firstElement);
    }
    Queue.prototype.insert = function (element) {
        this.linkedList.append(element);
    };
    Queue.prototype.peek = function () {
        return this.linkedList.Head.value;
    };
    Queue.prototype.remove = function () {
        var head = this.linkedList.Head.value;
        console.log("The head is", this.linkedList.Head);
        this.linkedList.Head.value = this.linkedList.Head.next.value;
        this.linkedList.Head.next = this.linkedList.Head.next.next;
        return head;
    };
    Queue.prototype.isEmpty = function () {
        return this.linkedList.Head ? true : false;
    };
    return Queue;
}());
exports["default"] = Queue;
