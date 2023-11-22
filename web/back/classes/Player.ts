export default class Player {
  public name : string
  public data : number[]

  public constructor(name: string, data: number[]) {
    this.name = name
    this.data = data
  }

  public clone() { return new Player(this.name, this.data) }
}