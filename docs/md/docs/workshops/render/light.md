# Path tracing

Es un metodo de monte carlo de computación gráfica de renderizar imagenes de una escenas tridimencional tal que la iluminación globar es fiel a la realidad. Fundamentalmente, el algoritmo esta integrando toda la iluminación que llega en un solo punto en la superficie de un objeto. La iluminación luego es reducida por una función de superficie reflectante (BRDF) para determinarcuanta de esta se ira al punto de vista de la camara. Esta integración es repetida por cada pixel en la imagen.

## BRDF

La función de distribución de reflectancia bidireccional es una función de 4 variables reales que define como la luz es reflejada en una superficie opaca. La función toma una dirección de luz de entrada, y una dirección de luz de salida, y regresa el ratio de resplandor reflejado que sale por el angulo de salida de la luz. Cada dirección esta parametrizada por el angulo de azimuth y el angulo de zenith.

Dada su precisión y naturaleza imparcial, "path tracing" es usado para fenerar imagenes de referencia cuando se prueba la calidad de otro algoritmos de renderizado.