import { ComputerRepo } from "./entities/computerRepo";
import { ComputerMaker } from "./models/computerMaker";

let ComputerShow = new ComputerRepo();

ComputerShow.make(new ComputerMaker("MSI Modren A15M", "1TB", "32GB", "Black"));

console.log(ComputerShow);

let list = ComputerShow.getList();

console.log(list);
