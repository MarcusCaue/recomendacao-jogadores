import classes.*;
import java.util.ArrayList;

public class Main {

  public static final String RESET = "\u001B[0m"; 
  public static final String AMARELO = "\u001B[33m"; 
  public static final String VERDE = "\u001B[32m";
  public static final String CIANO = "\u001B[36m";

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
    
    System.out.println("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

    for (SimilarityPlayers comp : comparacoes) {
      Player p1 = comp.getP1(); 
      char firstLetterP1 = p1.getName().charAt(0);
      
      Player p2 = comp.getP2();
      char firstLetterP2 = p2.getName().charAt(0);

      double similarity = comp.getSimilarity();

      System.out.printf("%s%s%s (%s'%c'%s) em relação à %s%s%s (%s'%c'%s) possuem %s%.0f%%%s de similaridade: \n\n",
        AMARELO, p1.getName(), RESET,
        AMARELO, firstLetterP1, RESET,
        VERDE, p2.getName(), RESET,
        VERDE, firstLetterP2, RESET,
        CIANO, similarity, RESET
      );

      System.out.printf("Passes:%s      %d%%%s(%s'%c'%s) | %s%d%%%s (%s'%c'%s)\n", 
        AMARELO, p1.getPercPasses(), RESET,
        AMARELO, firstLetterP1, RESET, 
        VERDE, p2.getPercPasses(), VERDE,
        VERDE, firstLetterP2, RESET
      );

      System.out.printf("Assitências:%s %d%%%s(%s'%c'%s) | %s%d%%%s (%s'%c'%s)\n",
        AMARELO, p1.getPercAssists(), RESET,
        AMARELO, firstLetterP1, RESET, 
        VERDE, p2.getPercAssists(), RESET,
        VERDE, firstLetterP2, RESET
      );

      System.out.println("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }

  }
}