package classes;

import java.util.List;
import java.util.ArrayList;

public class Player {
  String name;
  String team;
  double[] params;

  public Player(String name, String team, double[] params) {
    this.name = name;
    this.team = team;
    this.params = params;
  }

  public Player() {
  }
  
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getTeam() {
    return team;
  }
  public void setTeam(String team) {
    this.team = team;
  }
  public double[] getParams() {
    return params;
  }
  public void setParams(double[] params) {
    this.params = params;
  }
  
}
