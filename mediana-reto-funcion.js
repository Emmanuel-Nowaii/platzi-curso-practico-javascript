function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana(lista1) {
    const mitadLista1 = parseInt(lista1.length / 2);

    function esPar(numerito) {
        if(numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let mediana;
    
    if(esPar(lista1.length)) {
        // necesitamos dos elementos
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        
        return mediana = promedioElemento1y2;
        // -> el promedio
        // -> mediana
    } else {
        return mediana = lista1[mitadLista1];
        // posicion mitadLista1 dentro Lista1
        // -> mediana
    }
}

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

