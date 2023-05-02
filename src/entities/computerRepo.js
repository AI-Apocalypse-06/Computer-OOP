"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRepo = void 0;
var ComputerRepo = /** @class */ (function () {
    function ComputerRepo() {
        this.computerList = [];
        this.IDcounter = 0;
    }
    ComputerRepo.prototype.make = function (computer) {
        if (this.isExist(computer)) {
            throw new Error("Computer already exists");
        }
        else {
            computer.setID(++this.IDcounter);
            this.computerList.push(computer);
        }
    };
    ComputerRepo.prototype.isExist = function (newComputer) {
        for (var _i = 0, _a = this.computerList; _i < _a.length; _i++) {
            var com = _a[_i];
            if (com.model === newComputer.model &&
                com.ram === newComputer.ram &&
                com.storage === newComputer.storage &&
                com.color === newComputer.color) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    ComputerRepo.prototype.getList = function () {
        return this.computerList;
    };
    return ComputerRepo;
}());
exports.ComputerRepo = ComputerRepo;
