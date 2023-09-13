package classes;

public class SimilarityPlayers {
  Player p1;
  Player p2;
  double similarity;

  public SimilarityPlayers(Player p1, Player p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  public Player getP1() {
    return p1;
  }

  public void setP1(Player p1) {
    this.p1 = p1;
  }

  public Player getP2() {
    return p2;
  }

  public void setP2(Player p2) {
    this.p2 = p2;
  }

  public double getSimilarity() {
    return similarity;
  }

  public void setSimilarity(double similarity) {
    this.similarity = similarity;
  }

  
  
}
