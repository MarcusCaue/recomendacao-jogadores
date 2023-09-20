// Jonas de Samos

package classes;

public class Teste {

    public static double similarity(int[] attrEntOne, int[] attrEntTwo) {
        int somatorioAttrEntOneEntTwo = 0;
        double raizSomatorioEntOne = 0, raizSomatorioEntTwo = 0;

        for (int i = 0; i < attrEntOne.length; i++) {
            somatorioAttrEntOneEntTwo += attrEntOne[i] * attrEntTwo[i];
            raizSomatorioEntOne = attrEntOne[i] * attrEntOne[i];
            raizSomatorioEntTwo = attrEntTwo[i] * attrEntTwo[i];
        }

        raizSomatorioEntOne = Math.sqrt(raizSomatorioEntOne);
        raizSomatorioEntTwo = Math.sqrt(raizSomatorioEntTwo);

        double similarity = somatorioAttrEntOneEntTwo / (raizSomatorioEntOne * raizSomatorioEntTwo);

        return similarity;
    }

    public static void main(String args[]) {
        int[] entOne = {5, 5, 5};
        int[] entTwo = {5, 5, 4};

        System.out.println(similarity(entOne, entTwo));
    }
}
