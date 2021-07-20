var punto1 = { x: 100, y: 50, z: 0 }
var punto2 = { x: 200, y: 200, z: 0 }
var punto3 = { x: 200, y: 0, z: 0 }

/* 
| |x|y|z|
|-|-|-|-|
|a| | | |
|b| | | |
*/

function producto_cruz(a, b) {
    let result = {};
    result.x = a.y * b.z - a.z * b.y;
    result.y = a.x * b.z - b.x * a.z;
    result.z = a.x * b.y - b.x * a.y;
    return result;
}

function magnitud(vec) {
    return Math.sqrt(
        Math.pow(vec.x, 2) +
        Math.pow(vec.y, 2) +
        Math.pow(vec.z, 2)
    )

}

function diff(X, Y) {
    return {
        x: X.x - Y.x,
        y: X.y - Y.y,
        z: X.z - Y.z,
    }
}

function calculate_triangle(centro, derecha, izquierda) {
    let vector_derecho = diff(derecha, centro);
    let vector_izquierdo = diff(izquierda, centro);
    let paralelogram = producto_cruz(vector_derecho, vector_izquierdo);
    return magnitud(paralelogram) / 2;
}

function dentro_rango(baricentro) {
    return 0 <= baricentro && baricentro <= 1;
}

function en_triangulo(punto, A, B, C) {
    var triangulo_mayor = calculate_triangle(A, B, C);
    var u = calculate_triangle(A, punto, C) / triangulo_mayor;
    var v = calculate_triangle(B, punto, A) / triangulo_mayor;
    var w = calculate_triangle(C, punto, B)/ triangulo_mayor;
    print(u+ " - " +v+ " - " +w);
    print("suma = " + (u+v+w));
    return dentro_rango(u) && dentro_rango(v) && dentro_rango(w) && (u+v+w >= 0.9 && u+v+w <= 1.001);
}


const ROWS = 20;
const COLS = 20;
const LENGTH = 10;
var board, quadrille;

function rango_busqueda(v1, v2, v3) {
    let x_max = Math.max(v1.x, v2.x, v3.x);
    let x_min = Math.min(v1.x, v2.x, v3.x);
    let y_max = Math.max(v1.y, v2.y, v3.y);
    let y_min = Math.min(v1.y, v2.y, v3.y);
    return { x_max: x_max, x_min: x_min, y_max: y_max, y_min: y_min };
}

function setup() {
    createCanvas(512, 512);
    board = createQuadrille(crear_matriz(400/LENGTH));
    background('#2e0e36');
    var mapa = crear_quadrille_triangulo(punto1, punto2, punto3);
    board = Quadrille.OR(board, mapa, 0, 0);
    drawQuadrille(board, 0, 0, LENGTH, 1, 'magenta', true);
    // print(crear_matriz(20))
}

function crear_matriz(size) {
    var arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Array(size).fill(0);
    }
    return arr;
}

function matriz_no_simetrica(row, col) {
    var arr = [];
    for (let i = 0; i < row; i++) {
        arr[i] = Array(col).fill(0);
    }
    return arr;
}

function coord_to_matrix(coordenada) {
    return Math.floor(coordenada / LENGTH);
}

function range_to_matrix(rango) {
    return {
        row_min: coord_to_matrix(rango.y_min),
        row_max: coord_to_matrix(rango.y_max),
        col_min: coord_to_matrix(rango.x_min),
        col_max: coord_to_matrix(rango.x_max),
    }
}

function centro_cuadrado(row, col) {
    return {
        x: LENGTH/2 + col*LENGTH,
        y: LENGTH/2 + row*LENGTH,
        z:0,
    }
}

function crear_quadrille_triangulo(v1,v2,v3) {
    var rango = rango_busqueda(v1,v2,v3);
    print("rango");
    print(rango);
    var posiciones = range_to_matrix(rango);
    print("pos");
    print(posiciones);
    var mapa = matriz_no_simetrica(
        posiciones.row_max - posiciones.row_min,
        posiciones.col_max - posiciones.col_min,
    );
    print("mapa");
    print(mapa);
    for (let row = posiciones.row_min; row < posiciones.row_max ; row++) {
        for (let col = posiciones.col_min; col < posiciones.col_max; col++) {
            if (en_triangulo(
                centro_cuadrado(row, col),
                v1,v2,v3
            )) {
                print("centro");
                print(centro_cuadrado(row,col));
                mapa[row][col] = color('blue');
            } else {
                print("centro");
                print(centro_cuadrado(row,col));
                print("fuera");
            }
        }
    }
    return createQuadrille(mapa);
}
/**
 * crear un quadrille donde se ponga los valores del triangulo
 * luego reescribir en board
 */