// Similaridade por Cosseno
export function simiCos(attrOne : number[], attrTwo : number[]) {
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

// Similirade pela Média dos Atributos
export function simiMedia(attrOne : number[], attrTwo : number[]) {

  // Calculando o desempenho geral
  const desempenhoPlayerOne = attrOne.reduce((acc, value) => acc + value) / attrOne.length
  const desempenhoPlayerTwo = attrTwo.reduce((acc, value) => acc + value) / attrTwo.length

  // Comparar o primeiro jogador em relação ao segundo
  // Ex.: O quanto que Rodrygo está para Neymar, para Gabriel Jesus, para Richarlisson, etc.
  const similarity = desempenhoPlayerOne / desempenhoPlayerTwo

  return similarity
}

// Distância Euclidiana
export function distEucld(attrOne : number[], attrTwo : number[]) {
  let sumQuadDiffAttr = 0

  for (let i = 0; i < attrOne.length; i++) {
    sumQuadDiffAttr += (attrOne[i] - attrTwo[i]) ** 2
  }

  const distEucld = sumQuadDiffAttr ** 1/2

  return distEucld
}