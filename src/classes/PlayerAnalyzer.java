package classes;

import java.util.ArrayList;
import java.util.Arrays;
import utils.Reader;

public class PlayerAnalyzer {
  ArrayList<Player> players;

  public PlayerAnalyzer(ArrayList<Player> players) {
    this.players = players;
  }

  public PlayerAnalyzer() {
    this.preencheLista();
  }

  private void preencheLista() {
    ArrayList<Player> examplePlayers = new ArrayList<Player>();

    String[] content = {};

    try {
      content = Reader.readFile("./src/database/data.csv");
    } catch (Exception e) {
      System.err.println(e);
    }

    for (int i = 1; i < content.length; i++) {
      String[] valuesStringForm = content[i].replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",,", ",").split(",");
      
      String name = valuesStringForm[0];
      String team = valuesStringForm[1];

      double[] values = new double[32];

      for (int j = 0; j < 32; j++) {
        values[j] = Double.parseDouble(valuesStringForm[j + 2]);
      }

      Player pl = new Player(name, team, values);

      examplePlayers.add(pl);
    }

    
    this.players = examplePlayers;
  }

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