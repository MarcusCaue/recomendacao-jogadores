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
  // Desempenho Geral => Média dos atributos do jogador, desconsiderando:
  //    - Minutos jogados e Altura 

  // Removendo os minutos e a altura
  const attrOneWithoutMinAlt = attrOne.filter((_v, i) => i !== 0 && i !== 4)
  const attrTwoWithoutMinAlt = attrTwo.filter((_v, i) => i !== 0 && i !== 4)

  // Calculando o desempenho geral
  const desempenhoPlayerOne = attrOneWithoutMinAlt.reduce((acc, value) => acc + value) / attrOneWithoutMinAlt.length
  const desempenhoPlayerTwo = attrTwoWithoutMinAlt.reduce((acc, value) => acc + value) / attrTwoWithoutMinAlt.length

  // Comparar o primeiro jogador em relação ao segundo
  // Ex.: O quanto que Rodrygo está para Neymar, para Gabriel Jesus, para Richarlisson, etc.
  const similarity = desempenhoPlayerOne / desempenhoPlayerTwo

  return similarity
}

// Distância Euclidiana
export function distEucld(attrOne : number[], attrTwo : number[]) {
  // Será desconsiderado: "Minutos Jogados"

  const attrOneWithoutMinutes = attrOne.slice(1)
  const attrTwoWithoutMinutes = attrTwo.slice(1)

  let sumQuadDiffAttr = 0

  for (let i = 0; i < attrOneWithoutMinutes.length; i++) {
    sumQuadDiffAttr += (attrOneWithoutMinutes[i] - attrTwoWithoutMinutes[i]) ** 2
  }

  const distEucld = sumQuadDiffAttr ** 1/2

  return distEucld
}