"use strict";
exports.__esModule = true;
var Queue_1 = require("../Queue");
var AnimalShelter = /** @class */ (function () {
    function AnimalShelter() {
        this.catQueue = new Queue_1["default"]();
        this.dogQueue = new Queue_1["default"]();
    }
    AnimalShelter.prototype.enQueue = function (animal) {
        if (animal.type == 'Cat')
            this.catQueue.enqueue(animal);
        else if (animal.type === 'Dog')
            this.dogQueue.enqueue(animal);
    };
    AnimalShelter.prototype.deQueue = function () {
        if (this.catQueue.size() >= this.dogQueue.size()) {
            return this.catQueue.dequeue();
        }
        else
            return this.dogQueue.dequeue();
    };
    return AnimalShelter;
}());
exports["default"] = AnimalShelter;
