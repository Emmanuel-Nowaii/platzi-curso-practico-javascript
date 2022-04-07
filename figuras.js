// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo);

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd("Triángulos");

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");


// Díametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd("Círculos");


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valueInput = input.value;

    const perimetro = perimetroCuadrado(valueInput);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valueInput = input.value;
    
    const area = areaCuadrado(valueInput);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1").value;
    const valueInputLado1 = Number(inputLado1);
    const inputLado2 = document.getElementById("InputTrianguloLado2").value;
    const valueInputLado2 = Number(inputLado2);
    const inputBase = document.getElementById("InputTrianguloBase").value;
    const valueInputBase = Number(inputBase);

    const perimetro = perimetroTriangulo(valueInputLado1, valueInputLado2, valueInputBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueInputBase = inputBase.value;
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueInputAltura = inputAltura.value;

    const area = areaTriangulo(valueInputBase, valueInputAltura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputRadio");
    const valueInputRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueInputRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputRadio");
    const valueInputRadio = inputRadio.value;

    const area = areaCirculo(valueInputRadio);
    alert(area);
}
