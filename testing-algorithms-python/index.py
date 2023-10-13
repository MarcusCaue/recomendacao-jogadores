import functions as fc
from classes import Player, Result # type: ignore

# Leitura da Base de Dados
players = fc.readFile("./testing-algorithms-python/database/data.tsv")

# Jogador Referência
jogadorEscolhido = input("Nome do jogador: ")
primeiroJogador = players.get(jogadorEscolhido)

# Lista de Resultados
results : list[Result] = []

# Aplicando o algoritmo
for k,v in players.items():
    # Jogador a ser comparado com o jogador referência
    segundoJogador = v
    
    # Método escolhido
    semelhancaCosseno = fc.simiCos(primeiroJogador.dados, segundoJogador.dados)

    # Armazenando o resultado em uma ED
    result = Result(primeiroJogador, segundoJogador, semelhancaCosseno)
    
    # Salvando o resultado na lista
    results.append(result)

# Salvando os resultados em um arquivo
fc.saveResult("similaridade_cossenos.csv", results)
