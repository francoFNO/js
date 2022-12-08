let usuario=prompt("ingrese su nombre")
const fifa=9000
const pes=8000
const uncharted=5000
const dishonored=3000
let total=0

function carrito(){
    let producto=prompt("que juego desea comprar?")
    let precio=0

    switch (producto) {
        case "fifa":
            precio=fifa
            break;
        case "pes":
            precio=pes
            break
        default:
            alert("opcion no valida")
            break;
    }
}




// case "pes":
//                 alert("se añadio el "+juego2+ " al carrito")
//                 break;
//             case "uncharted":
//                     alert("se añadio el "+juego3+ " al carrito")
//                     break;
//             case "dishonored":
//                 alert("se añadio el "+juego4+ " al carrito")
//                 break;