import functions as fc
from classes import Player  # type: ignore

players = fc.readFile("./testing-algorithms-python/database/data.tsv")

primeiroJogador = players.get("Rodrygo")
segundoJogador = players.get("Neymar")

print(f"Dados de {primeiroJogador.nome} => {primeiroJogador.dados}")
print(f"Dados de {segundoJogador.nome} => {segundoJogador.dados}")

print(f"\nSemelhança entre eles: {fc.simiCos(primeiroJogador.dados, segundoJogador.dados)}")
