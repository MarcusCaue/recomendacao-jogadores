package classes;

import java.util.ArrayList;

public class PlayerAnalyzer {
  ArrayList<Player> players;

  public PlayerAnalyzer(ArrayList<Player> players) {
    this.players = players;
  }

  public ArrayList<SimilarityPlayers> compararJogadores(Player player) {
    ArrayList<SimilarityPlayers> comparacoes = new ArrayList<SimilarityPlayers>();

    ArrayList<Player> playersCopy = this.getPlayers();
    playersCopy.remove(player);

    for (Player pl : playersCopy) {
      double percSimilarity = 100 - Math.sqrt(
        Math.pow((pl.percAssists - player.percAssists), 2) + 
        Math.pow((pl.percPasses - player.percPasses), 2)
      );

      SimilarityPlayers similarity = new SimilarityPlayers(player, pl);
      similarity.setSimilarity(percSimilarity);

      comparacoes.add(similarity);
    }
    
    return comparacoes;
  }


  public ArrayList<Player> getPlayers() {
    ArrayList<Player> playersCopy = new ArrayList<Player>();

    for (Player pl : this.players) {
      playersCopy.add(pl);
    }
    
    return playersCopy;
  }

}