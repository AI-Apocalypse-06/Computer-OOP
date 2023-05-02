import { ComputerMaker } from "../models/computerMaker";

export class ComputerRepo {
  private computerList: ComputerMaker[] = [];

  public IDcounter: number = 0;

  make(computer: ComputerMaker) {
    if (this.isExist(computer)) {
      throw new Error("Computer already exists");
    } else {
      computer.setID(++this.IDcounter);
      this.computerList.push(computer);
    }
  }
  isExist(newComputer: ComputerMaker) {
    for (let com of this.computerList) {
      if (
        com.model === newComputer.model &&
        com.ram === newComputer.ram &&
        com.storage === newComputer.storage &&
        com.color === newComputer.color
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  getList() {
    return this.computerList;
  }
}
