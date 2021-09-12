"use strict";
exports.__esModule = true;
exports.LinkNode = exports.LinkedList = void 0;
var LinkNode = /** @class */ (function () {
    function LinkNode(value, prev) {
        this.value = value;
        this.prev = prev;
    }
    return LinkNode;
}());
exports.LinkNode = LinkNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.Head = null;
        this.latest = null;
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
            return nodeToPop.value;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
