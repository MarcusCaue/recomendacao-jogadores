package classes;

import java.lang.Comparable;

public class SimilarityPlayers implements Comparable<SimilarityPlayers> {
  Player p1;
  Player p2;
  double similarity;

  public SimilarityPlayers(Player p1, Player p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  public int compareTo(SimilarityPlayers secondElement) {
    double secondElementSimilarity = secondElement.getSimilarity();

    double difference = secondElementSimilarity  - this.similarity;

    if (difference < 0)
      return -1;
    else if (difference > 0)
      return 1;
    else
      return 0;
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
