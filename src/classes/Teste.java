package classes;

public class Teste {

    public static double simiCos(int[] attrOne, int[] attrTwo) {
        int sumOneTwo = 0;
        double compriOne = 0, compriTwo = 0;

        for (int i = 0; i < attrOne.length; i++) {
            sumOneTwo += attrOne[i] * attrTwo[i];
            compriOne += attrOne[i] * attrOne[i];
            compriTwo += attrTwo[i] * attrTwo[i];
        }

        compriOne = Math.sqrt(compriOne);
        compriTwo = Math.sqrt(compriTwo);

        double similarity = sumOneTwo / (compriOne * compriTwo);

        return similarity;
    }

}
