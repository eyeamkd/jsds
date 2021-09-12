"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    function Queue() {
        this.linkedList = null;
        this.queueSize = 0;
    }
    Queue.prototype.enqueue = function (element) {
        if (this.linkedList === null)
            this.linkedList = new LinkedList_1.LinkedList(element);
        else
            this.linkedList.append(element);
        this.queueSize += 1;
    };
    Queue.prototype.peek = function () {
        return this.linkedList.Head.value;
    };
    Queue.prototype.dequeue = function () {
        var head = this.linkedList.Head.value;
        this.linkedList.Head.value = this.linkedList.Head.next.value;
        this.linkedList.Head.next = this.linkedList.Head.next.next;
        this.queueSize -= 1;
        console.log("Animal is ", head);
        return { head: head };
    };
    Queue.prototype.isEmpty = function () {
        return this.linkedList.Head ? true : false;
    };
    Queue.prototype.size = function () {
        return this.queueSize;
    };
    return Queue;
}());
exports["default"] = Queue;
