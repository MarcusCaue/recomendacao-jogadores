from classes import Player # type: ignore

def readFile(filename: str) -> dict[str, Player]:
  data = {}
  
  with open(filename, "r", encoding="utf8") as arq:
    lines = arq.readlines()
    
    for i in range(1, 6):
      playerDataStr = lines[i].replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",", ".").split("\t")
      
      playerData = []
      for d in playerDataStr[2:]:
        playerData.append(float(d))
      
      data[playerDataStr[0]] = Player(playerDataStr[0], playerDataStr[1], playerData)
      
  return data
    
def calculaDesempenho(playerData: list[float]):
  soma = sum(playerData)
  quant = len(playerData)
  return soma / quant

# Semelhança pela divisão das médias dos dados
def simiMedia(d1: float, d2: float):
  # O quanto que D1 está para D2
  return d1 / d2

# Semelhança de Cossenos
def simiCos(pd1: list[float], pd2: list[float]):
  comprimentoPrimeiro = comprimentoSegundo = somatorioDados = 0
  
  for i in range(len(pd1)):
    somatorioDados += pd1[i] * pd2[i]
    comprimentoPrimeiro += pd1[i] ** 2
    comprimentoSegundo += pd2[i] ** 2

  comprimentoPrimeiro **= 1/2
  comprimentoSegundo **= 1/2

  semelhanca = somatorioDados / (comprimentoPrimeiro * comprimentoSegundo)

  return semelhanca

