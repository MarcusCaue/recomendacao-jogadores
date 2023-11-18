export interface FilterPlayerRequestBody {
  referencePlayer: number,
  otherPlayers: number[],
  algId: number,
  params: number[]
}