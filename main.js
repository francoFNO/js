let usuario=prompt("ingrese su nombre")
let juego1="fifa"
let juego2="pes"
let juego3="uncharted"
let juego4="call of duty"
let juego5="god of war"
let juego6="need for speed"

if (usuario!="") {
    function saludar(nombre){
        alert("hola, "+ usuario )
    }
    
    saludar()
    let opciones= prompt("Ingrese el juego que desee sumar al carrito de compras: \n1 - fifa. \n2 -pes. \n3 -uncharted. \n4 -call of duty. \n5 -god of war. \n6 -need for speed. \n7 -ver carrito \nPresiona 0 para finalizar")
    while (opciones!=0) {
        switch (opciones) {
            case "1":
                alert("se añadio el "+juego1+" al carrito")
                break;
            case "2":
                alert("se añadio el "+juego2+ " al carrito")
                break;
            case "3":
                    alert("se añadio el "+juego3+ " al carrito")
                    break;
            case "4":
                alert("se añadio el "+juego4+ " al carrito")
                break;
            case "5":
                alert("se añadio el "+juego5+ " al carrito")
                break;
            case "6":
                alert("se añadio el "+juego6+ " al carrito")
                break
            case "7":
                alert("")
            default:
                alert("opcion no valida")
                break;
        
            }
        opciones= prompt("Ingrese el juego que desee sumar al carrito de compras: \n1 - fifa. \n2 -pes. \n3 -uncharted. \n4 -call of duty. \n5 -god of war. \n6 -need for speed. \n7 -ver carrito \nPresiona 0 para finalizar")
        
            
        
        
    }

    




}else {
    alert("ingrese un nombre")
}

alert("gracias por elegirnos")
