package utils;

import java.util.ArrayList;
import classes.Player;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public abstract class Reader {
  
  public static void readFile(String path) throws IOException {

    byte[] encoded = Files.readAllBytes(Paths.get(path));
    String content = StandardCharsets.UTF_8.decode(ByteBuffer.wrap(encoded)).toString();

    String[] lines = content.split("\n");
    // String params = lines[0].replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",,", ",");

    ArrayList<Player> players = new ArrayList<Player>();

    for (int i = 1; i < lines.length; i++) {
      String[] valuesStringForm = lines[i].replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",,", ",").split(",");
      
      String name = valuesStringForm[0];
      String team = valuesStringForm[1];

      double[] values = new double[32];

      for (int j = 0; j < 32; j++) {
        values[j] = Double.parseDouble(valuesStringForm[j + 2]);
      }

      Player pl = new Player(name, team, values);

      players.add(pl);
    }

    double similaridade = Methods.simiCos(players.get(0).getParams(), players.get(107).getParams());

    System.out.println(similaridade);


  }


}
