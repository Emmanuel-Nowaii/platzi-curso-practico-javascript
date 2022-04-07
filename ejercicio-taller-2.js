const cupones = ["prueba1", "prueba2", "prueba3"];
const descuentos = [15, 50, 10];
// const precio = 100;
// const cuponIngresado = "prueba3";


// cupones.forEach((cupon, index) => {
//     if(cuponIngresado === cupon) {
//         const porcentajePrecioConDescuento = 100 - descuentos[index];
//         const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

//         console.log(precioConDescuento);
//     } else {
//         console.log("El cupon ingresado no es válido");
//     }
// });

function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
        
    return precioConDescuento;
}


function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("InputPrice").value;
    const priceValue = Number(inputPrice);
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    cupones.forEach((cupon, index) => {
        if(couponValue === cupon) {
            descuento = descuentos[index];

            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
            const resultPrice = document.getElementById("ResultPrice");
            resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
        } 
    }); 
}