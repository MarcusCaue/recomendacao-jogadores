package utils;

import java.util.ArrayList;
import classes.Player;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public abstract class Reader {
  
  public static String[] readFile(String path) throws IOException {

    byte[] encoded = Files.readAllBytes(Paths.get(path));
    String content = StandardCharsets.UTF_8.decode(ByteBuffer.wrap(encoded)).toString();

    String[] lines = content.split("\n");
    // String params = lines[0].replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",,", ",");

    return lines;
  }


}
