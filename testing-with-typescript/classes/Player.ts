export default class Player {
  public name : string
  public team : string
  public data : number[]

  public constructor(name: string, team: string, data: number[]) {
    this.name = name
    this.team = team
    this.data = data
  }
}