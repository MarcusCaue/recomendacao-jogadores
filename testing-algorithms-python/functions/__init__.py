def readFile(filename: str):
  data = {}
  
  with open(filename, "r", encoding="utf8") as arq:
    lines = arq.readlines()
    
    for i in range(1, 6):
      player = lines[i].replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",,", ",").split(",")
      
      player_data = []
      for d in player[2:]:
        player_data.append(int(d))
      
      data[player[0]] = player_data
      
  return data
    

def jaccard(a, b):

  common_elements = a[::]
  
  
  print(common_elements)
  