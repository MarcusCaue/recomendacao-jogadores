package classes;

import java.util.ArrayList;
import java.util.Arrays;

public class PlayerAnalyzer {
  ArrayList<Player> players;

  public PlayerAnalyzer(ArrayList<Player> players) {
    this.players = players;
  }

  public PlayerAnalyzer() {
    // this.preencheLista();
  }

 /*  private void preencheLista() {
    ArrayList<Player> examplePlayers = new ArrayList<Player>();
    
    examplePlayers.add(new Player("Neymar",          (byte) 95, (byte) 83));
    examplePlayers.add(new Player("Richarlisson",    (byte) 86, (byte) 17));
    examplePlayers.add(new Player("Rodrygo",         (byte) 90, (byte) 48));
    examplePlayers.add(new Player("Vini Jr",         (byte) 92, (byte) 83));
    examplePlayers.add(new Player("Tiquinho Soares", (byte) 87, (byte) 88));
    examplePlayers.add(new Player("Gabriel Jesus",   (byte) 69, (byte) 67));
    examplePlayers.add(new Player("Dimittri Payet",  (byte) 62, (byte) 87));

    this.players = examplePlayers;
  } */

  /* public ArrayList<SimilarityPlayers> compararJogadores(Player player) {
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
  } */

/*   public SimilarityPlayers[] tresMaisProx(Player player) {
    SimilarityPlayers[] tresMaisProximos = new SimilarityPlayers[3];

    Object[] comparacoes = this.compararJogadores(player).toArray();
    Arrays.sort(comparacoes);

    tresMaisProximos[0] = (SimilarityPlayers) comparacoes[0];
    tresMaisProximos[1] = (SimilarityPlayers) comparacoes[1];
    tresMaisProximos[2] = (SimilarityPlayers) comparacoes[2];

    return tresMaisProximos;
  }
 */
 
  public ArrayList<Player> getPlayers() {
    ArrayList<Player> playersCopy = new ArrayList<Player>();

    for (Player pl : this.players) {
      playersCopy.add(pl);
    }
    
    return playersCopy;
  }

  public Player getPlayer(int id) {
    return this.players.get(id);
  }
 
}