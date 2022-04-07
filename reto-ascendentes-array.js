const lista1 = [8, 5, 7, 1, 3];
let aux;

for (let i = 0; i < lista1.length - 1; i++) {
   for (let j = 0; j < lista1.length - 1; j++) {
       if (lista1[j] > lista1[j+1]) { // numeroActual > numeroSiguiente, 8 > 5 numeroActual = 8, numeroSiguiente = 5 // 8 > 7 numeroActual = 8, numeroSiguiente = 7 // 8 > 1 numeroActual = 8, numeroSiguiente = 1 // 8 > 3
        // 5 > 7 numeroActual = 5, numeroSiguiente = 7 
        // 7 > 1 numeroActual = 7, numeroSiguiente = 1   
        // 7 > 3 numeroActual = 7, numeroSiguiente = 3
        // 7 > 8
        // 5 > 1 numeroActual = 5, numeroSiguiente = 1
        // 5 > 3 numeroActual = 5, numeroSiguiente = 3
        // 5 > 7 numeroActual = 5, numeroSiguiente = 7
        // 1 > 3
        aux = lista1[j];  // aux = numeroActual, aux = 8 // aux = 8 // aux = 8 // aux = 8
            // --
            // aux = 7
            // aux = 7
            // --
            // aux = 5
            // aux = 5
            // --
            // --
        lista1[j] = lista1[j+1]; // numeroActual = numeroSiguiente, numeroActual = 5 // numeroActual = 7 // numeroActual = 1 //numeroActual = 3
        // --
        // numeroActual = 1
        // numeroActual = 3
        // --
        // numeroActual = 1
        // numeroActual = 3
        // --
        // --
            lista1[j+1] = aux; //numeroSiguiente = aux, numeroSiguiente = 8 // numeroSiguiente = 8 // numeroSiguiente = 8
            // --
            // numeroSiguiente = 7
            // numeroSiguiente = 7
            // --
            // numeroSiguiente = 5
            // numeroSiguiente = 5
            // --
            // --
       }
   }
}

for (let i = 0; i < lista1.length; i++) {
    console.log(lista1[i]); // [8,5,7,1,3], [5,7,1,3,8], [5,1,3,7,8], [1,3,5,7,8], [1,3,5,7,8]
}


lista1.sort((a,b) => {return a - b});
console.log(lista1);


// Reto obtener la media aritmetica y mediana del arreglo ordenado de forma ascendente