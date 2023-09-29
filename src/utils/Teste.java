package utils;

public abstract class Teste {

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

    public static double simiEucld(double[] attrOne, double[] attrTwo) {

        double somatorioDistancias = 0;

        for (int i = 0; i < attrOne.length; i++) {
            somatorioDistancias += Math.pow(attrOne[i] - attrTwo[i], 2);
        }

        double distEucld = Math.sqrt(somatorioDistancias);

        distEucld = distEucld / (1 + distEucld);

        return distEucld;
    }

    public static double simiMink(double[] attrOne, double[] attrTwo) {
        int quantParams = attrOne.length;

        double somatorioDistancias = 0;

        for (int i = 0; i < quantParams; i++) {
            somatorioDistancias += Math.pow(Math.abs(attrOne[i] - attrTwo[i]), quantParams);
        }

        double distMink = Math.pow(somatorioDistancias, 1 / quantParams);

        distMink = distMink / (1 + distMink);

        return distMink;
    }


    public static double pearson(double[] attrOne, double[] attrTwo) {
        double coefPearson = 0;



        return coefPearson;
    }
}
