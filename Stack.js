"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack(value) {
        this.linkedList = new LinkedList(value);
    }
    Stack.prototype.push = function (node) {
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
    return Stack;
}());
var LinkNode = /** @class */ (function () {
    function LinkNode(value, prev) {
        this.value = value;
        this.prev = prev;
    }
    return LinkNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        var head = new LinkNode(value, null);
        this.Head = head;
        this.latest = head;
    }
    LinkedList.prototype.append = function (element) {
        var linkNode = new LinkNode(element, this.latest);
        linkNode.value = element;
        linkNode.next = null;
        linkNode.prev = this.latest;
        this.latest = linkNode;
    };
    LinkedList.prototype.pop = function () {
        if (this.Head != null) {
            var nodeToPop = null;
            nodeToPop = this.latest;
            this.latest = this.latest.prev;
            return nodeToPop;
        }
    };
    return LinkedList;
}());
exports["default"] = Stack;
