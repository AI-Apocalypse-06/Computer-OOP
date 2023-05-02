export class ComputerMaker {
  private id: number;
  constructor(
    public model: string,
    public storage: string,
    public ram: string,
    public color: string
  ) {}

  information() {
    console.log(
      `Model: ${this.model}, Storage: ${this.storage}, RAM: ${this.ram}, Color: ${this.color}`
    );
  }

  getID() {
    return this.id;
  }
  setID(id: number) {
    this.id = id;
  }
}
