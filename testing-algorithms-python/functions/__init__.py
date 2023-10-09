from classes import Player # type: ignore

# Leitura do arquivo, obtenção e formatação dos dados
def readFile(filename: str) -> "dict[str, Player]":
  # Dados dos jogadores selecionados
  data = {}
  
  # Leitura do arquivo
  with open(filename, "r", encoding="utf8") as arq:
    lines = arq.readlines()
    
    # Lendo dados dos jogadores
    for i in range(1, len(lines)):
      # Dados na forma de string
      playerDataStr = formatString(lines[i]).split("\t")
      
      # Dados convertidos para números
      playerData = list(map(float, playerDataStr[2:12]))

      playerName = playerDataStr[0]
      playerTeam = playerDataStr[1]

      # Adicionando um novo jogador à coleção de jogadores
      data[playerName] = Player(playerName, playerTeam, playerData)
      
  return data


def formatString(string: str) -> str:
  return string.replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",", ".")


def calculaDesempenho(playerData: "list[float]"):
  soma = sum(playerData)
  quant = len(playerData)
  return soma / quant

# Semelhança pela divisão das médias dos dados
def simiMedia(d1: float, d2: float):
  # O quanto que D1 está para D2
  return d1 / d2

# Semelhança por Cosseno
def simiCos(attrOne: "list[float]", attrTwo: "list[float]"):
  comprimentoPrimeiro = comprimentoSegundo = somatorioDados = 0
  
  for i in range(len(attrOne)):
    somatorioDados += attrOne[i] * attrTwo[i]
    comprimentoPrimeiro += attrOne[i] ** 2
    comprimentoSegundo += attrTwo[i] ** 2

  comprimentoPrimeiro **= 1/2
  comprimentoSegundo **= 1/2

  semelhanca = somatorioDados / (comprimentoPrimeiro * comprimentoSegundo)

  return semelhanca

