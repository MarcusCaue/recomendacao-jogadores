import { readFile } from "./file_manipulation"
import Player from "../classes/Player"
import Result from "../classes/Result"

export function simiCos(attrOne : number[], attrTwo: number[]) {
  let comprimentoPrimeiro = 0
  let comprimentoSegundo = 0
  let somatorioDados = 0
  
  for (let i = 0; i < attrOne.length; i++) {
    somatorioDados += attrOne[i] * attrTwo[i]
    comprimentoPrimeiro += attrOne[i] ** 2
    comprimentoSegundo += attrTwo[i] ** 2
  }

  comprimentoPrimeiro **= 1/2
  comprimentoSegundo **= 1/2

  const semelhanca = somatorioDados / (comprimentoPrimeiro * comprimentoSegundo)

  return semelhanca
}
