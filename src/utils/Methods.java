package utils;

public abstract class Methods {

    // Similaridade de Cossenos
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

<<<<<<< HEAD:src/utils/Methods.java
    public static double simiTales(double[] attrOne, double[] attrTwo) {
        

        return 0;
=======

    // Similaridade segundo a Distância Euclidiana
    public static double simiEucld(double[] attrOne, double[] attrTwo) {

        double somatorioDistancias = 0;

        for (int i = 0; i < attrOne.length; i++) {
            somatorioDistancias += Math.pow(attrOne[i] - attrTwo[i], 2);
        }

        double distEucld = Math.sqrt(somatorioDistancias);

        distEucld = distEucld / (1 + distEucld);

        return distEucld;
    }

    // Similaridade segundo a Distância de Minkwoski
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

    // Similaridade pelo Coeficiente de Correlação de Pearson
    public static double pearson(double[] attrOne, double[] attrTwo) {

        int quantParams = attrOne.length;

        double mediaOne = 0;
        double mediaTwo = 0;
        for (int i = 0; i < quantParams; i++) {
            mediaOne += attrOne[i];
            mediaTwo += attrTwo[i];
        }

        mediaOne /= quantParams;
        mediaTwo /= quantParams;

        double covariancia = 0;
        double desvioPadrao = 0;

        for (int i = 0; i < quantParams; i++) {
            covariancia += (attrOne[i] - mediaOne) * (attrTwo[i] * mediaTwo);
            desvioPadrao += (attrOne[i] - mediaOne) * (attrTwo[i] * mediaTwo);
        }

        double coefPearson = 0;

        return coefPearson;
>>>>>>> 1c4aa26680223cae0f2a321cb22c165f7eb92472:src/utils/Teste.java
    }
}
