function alturaTrianguloIsosceles(lado1, lado2, base) {
    if(lado1 == lado2 && lado1 != base && lado2 != base) {
        const altura = Math.sqrt((lado1 * lado1) - ((base * base) / 4));
        return "La altura del triangulo isosceles es: " + altura;
    } else {
        return "La medida de los lados no corresponden a un triangulo isosceles";
    }
}

function calcularAlturaTrianguloIsosceles () {
    const valueInputLado1 = document.getElementById("InputTrianguloLado1").value;
    const numberInputLado1 = Number(valueInputLado1);
    const valueInputLado2 = document.getElementById("InputTrianguloLado2").value;
    const numberInputLado2 = Number(valueInputLado2);
    const valueInputBase = document.getElementById("InputTrianguloBase").value;
    const numberInputBase = Number(valueInputBase);

    const altura = alturaTrianguloIsosceles(numberInputLado1, numberInputLado2, numberInputBase);
    alert(altura);
}