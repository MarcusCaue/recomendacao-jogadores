package classes;

public class Player {
  String name;
  byte percPasses;
  byte percAssists;
   
  public Player(String name, byte percPasses, byte percAssists) {
    this.name = name;
    this.percPasses = percPasses;
    this.percAssists = percAssists;
  }

  public String getName() {
    return name;
  }

  public byte getPercPasses() {
    return percPasses;
  }

  public byte getPercAssists() {
    return percAssists;
  }

  
}
