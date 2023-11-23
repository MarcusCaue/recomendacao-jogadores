import Player from "./Player"

export default class Result {
  public referencePlayer : Player
  public comparedPlayer : Player
  public result : number

  public constructor(referencePlayer: Player, comparedPlayer: Player, result: number) {
    this.referencePlayer = referencePlayer
    this.comparedPlayer = comparedPlayer
    this.result = result
  }

  public clone() { return new Result(this.referencePlayer, this.comparedPlayer, this.result) } 
}