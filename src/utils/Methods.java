package utils;

public abstract class Methods {

    public static double simiCos(double[] attrOne, double[] attrTwo) {
        double sumOneTwo = 0;
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

    public static double simiTales(double[] attrOne, double[] attrTwo) {
        

        return 0;
    }
}
