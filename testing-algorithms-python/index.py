import functions as fc

players = fc.readFile("./testing-algorithms-python/database/data.csv")

primeiro_jogador = players.get("Rodrygo")
segundo_jogador = players.get("Neymar")

fc.jaccard(primeiro_jogador, segundo_jogador)

