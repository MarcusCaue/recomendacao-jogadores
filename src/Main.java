import classes.*;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {

    ArrayList<Player> players = new ArrayList<Player>();
    
    players.add(new Player("Neymar",          (byte) 95, (byte) 83));
    players.add(new Player("Richarlisson",    (byte) 86, (byte) 17));
    players.add(new Player("Rodrygo",         (byte) 90, (byte) 48));
    players.add(new Player("Vini Jr",         (byte) 92, (byte) 83));
    players.add(new Player("Tiquinho Soares", (byte) 87, (byte) 88));
    players.add(new Player("Gabriel Jesus",   (byte) 69, (byte) 67));
    players.add(new Player("Dimittri Payet",  (byte) 62, (byte) 87));
    
    PlayerAnalyzer panlz = new PlayerAnalyzer(players);

    ArrayList<SimilarityPlayers> comparacoes = panlz.compararJogadores(players.get(0));
    
    System.out.println("Jogador Escolhido | Jogador Comparado | Passes JE | Passes JC | Assistências JE |  Assistências JC | Similaridade |");

    for (SimilarityPlayers comp : comparacoes) {
      Player p1 = comp.getP1();
      Player p2 = comp.getP2();
      double similarity = comp.getSimilarity();

      System.out.printf(
        "\n%s | %s |\t %d%% | %d%% | %d%% | %d%% | %.0f%% |\n",
        p1.getName(), p2.getName(), p1.getPercPasses(),
        p2.getPercPasses(), p1.getPercAssists(), p2.getPercAssists(),
        similarity
      );
    }

  }
}