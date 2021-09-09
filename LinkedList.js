"use strict";
exports.__esModule = true;
exports.LinkedList = exports.LinkNode = void 0;
var LinkNode = /** @class */ (function () {
    function LinkNode(value, prev) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
    return LinkNode;
}());
exports.LinkNode = LinkNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        var head = new LinkNode(value, null);
        this.Head = head;
        this.latest = head;
    }
    LinkedList.prototype.append = function (element) {
        var linkNode = new LinkNode(element, this.latest);
        if (this.Head.next == null) {
            this.Head.next = linkNode;
            this.latest = linkNode;
        }
        this.latest.next = linkNode;
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
    LinkedList.prototype.remove = function () {
        if (this.Head != null) {
            var head = this.Head.value;
            this.Head = this.Head.next;
            return head;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
