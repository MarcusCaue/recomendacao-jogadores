import classes.*;
import java.util.ArrayList;

public class Main {

  public static String colorir(Object txt, String cor) {
    final String RESET = "\u001B[0m"; 
    final String AMARELO = "\u001B[33m"; 
    final String VERDE = "\u001B[32m";
    final String CIANO = "\u001B[36m";

    String textoColorido = "";

    String corEscolhida = "";
    switch (cor) {
      case "verde":
        corEscolhida = VERDE;
        break;
      case "amarelo":
        corEscolhida = AMARELO;
        break;
      case "ciano":
        corEscolhida = CIANO;
        break;
    }

    textoColorido = corEscolhida + txt + RESET;

    return textoColorido;
  }
    
  public static void main(String[] args) { 
    // Analisador 
    PlayerAnalyzer analyzer = new PlayerAnalyzer();

    // Jogador Escolhido
    Player choicedPlayer = analyzer.getPlayer(6);

    // Jogador Escolhido comparado aos outros da lista
    ArrayList<SimilarityPlayers> comparacoes = analyzer.compararJogadores(choicedPlayer);

    // Os três jogadores mais parecidos com o jogador escolhido
    SimilarityPlayers[] tresProx = analyzer.tresMaisProx(choicedPlayer);
    
    System.out.println("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

    // Exibindo as comparações
    for (SimilarityPlayers comp : comparacoes) {
      Player p1 = comp.getP1(); 
      char firstLetterP1 = p1.getName().charAt(0);
      
      Player p2 = comp.getP2();
      char firstLetterP2 = p2.getName().charAt(0);

      double similarity = comp.getSimilarity();

      System.out.printf("%s ('%s') em relação à %s ('%s') possuem %s de similaridade: \n\n",
        colorir(p1.getName(), "amarelo"),
        colorir(firstLetterP1, "amarelo"),
        colorir(p2.getName(), "verde"),
        colorir(firstLetterP2, "verde"),
        colorir(String.format("%.0f%%", similarity), "ciano")
      );

      System.out.printf("Passes:      %s('%s') | %s ('%s')\n", 
        colorir(p1.getPercPasses() + "%", "amarelo"),
        colorir(firstLetterP1, "amarelo"), 
        colorir(p2.getPercPasses() + "%", "verde"),
        colorir(firstLetterP2, "verde")
      );

      System.out.printf("Assitências: %s('%s') | %s ('%s')\n",
        colorir(p1.getPercAssists() + "%", "amarelo"),
        colorir(firstLetterP1, "amarelo"), 
        colorir(p2.getPercAssists() + "%", "verde"),
        colorir(firstLetterP2, "verde")
      );

      System.out.println("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }

    // Exibindo os três vizinhos mais próximos com base em dois parâmetros
    System.out.printf("\n<<<<< OS TRÊS JOGADORES MAIS PARECIDOS COM '%s' >>>>>\n", 
      colorir(choicedPlayer.getName(), "amarelo")
    );

    for (SimilarityPlayers pl : tresProx) {
      System.out.printf("    - '%s' com %s de similaridade\n",
        colorir(pl.getP2().getName(), "verde"),
        colorir(String.format("%.0f", pl.getSimilarity()) + "%", "ciano")
      );
    }

    System.out.println("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

  }
}