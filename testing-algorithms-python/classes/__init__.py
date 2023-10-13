class Player:
  """
  Jogador |	Equipe | Minutos jogados | Gols	Assistências |	
  Duelos ganhos |	Altura | Duelos defensivos ganhos | Duelos aéreos ganhos |	
  Interseções/90 | Golos sem ser por penálti | Golos esperados/90
  """
  def __init__(self, nome: str, time: str, dados: "list[float]"):
    self.nome = nome
    self.time = time
    self.dados = dados
  
class Result:
  def __init__(self, primeiroJogador: Player, segundoJogador: Player, valor: float):
    self.primeiroJogador = primeiroJogador
    self.segundoJogador = segundoJogador
    self.valor = valor

