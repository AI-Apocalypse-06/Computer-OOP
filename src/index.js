"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computerRepo_1 = require("./entities/computerRepo");
var computerMaker_1 = require("./models/computerMaker");
var ComputerShow = new computerRepo_1.ComputerRepo();
ComputerShow.make(new computerMaker_1.ComputerMaker("MSI Modren A15M", "1T", "32GB", "Black"));
console.log(ComputerShow);
var list = ComputerShow.getList();
console.log(list);
