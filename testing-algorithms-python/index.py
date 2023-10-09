import functions as fc
from classes import Player 

players = fc.readFile("./testing-algorithms-python/database/data.tsv")

jogadorEscolhido = input("Nome do jogador: ")

primeiroJogador = players.get(jogadorEscolhido)

for k,v in players.items():
    segundoJogador = v

    print(f"'{primeiroJogador.nome}' em relação à '{k}' tem a seguinte semelhança: {fc.simiCos(primeiroJogador.dados, v.dados)}\n")