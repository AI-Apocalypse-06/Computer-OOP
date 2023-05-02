"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerMaker = void 0;
var ComputerMaker = /** @class */ (function () {
    function ComputerMaker(model, storage, ram, color) {
        this.model = model;
        this.storage = storage;
        this.ram = ram;
        this.color = color;
    }
    ComputerMaker.prototype.information = function () {
        console.log("Model: ".concat(this.model, ", Storage: ").concat(this.storage, ", RAM: ").concat(this.ram, ", Color: ").concat(this.color));
    };
    ComputerMaker.prototype.getID = function () {
        return this.id;
    };
    ComputerMaker.prototype.setID = function (id) {
        this.id = id;
    };
    return ComputerMaker;
}());
exports.ComputerMaker = ComputerMaker;
