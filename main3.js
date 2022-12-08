let usuario=prompt("ingrese su nombre")
const fifa=9000
const pes=8000
const uncharted=5000
const dishonored=3000
let precio=0
const juego1="fifa"
const juego2="pes"
const juego3="uncharted"
const juego4="dishonored"
if (usuario!="") {
    function saludar(nombre){
        alert("hola, "+ usuario )
    }
    
    saludar()
    let opciones= prompt("Ingrese el juego que desee sumar al carrito de compras: \n - fifa. \n -pes. \n -uncharted. \n -dishonored. \nPresiona 0 para finalizar")
    while (opciones!=0) {
        switch (opciones) {
            case "fifa":
                if (opciones=="fifa") {
                    precio=parseInt(precio+fifa)
                    alert("el precio total es de $" +precio)
                }
                
                break;
            case "pes":
                if (opciones=="pes") {
                    precio=parseInt(precio+pes)
                    alert("el precio total es de $ "+precio)
                }
                    
                break;
            case "uncharted":
                if (opciones=="uncharted") {
                    precio=parseInt(precio+uncharted)
                    alert("el precio total es de $ "+precio)
                }
                        
                break;
            case "dishonored":
                if (opciones=="dishonored") {
                    precio=parseInt(precio+dishonored)
                    alert("el precio total es de $ "+precio)
                }
                            
                    break;

           
            default:
                alert("opcion no valida")
                break;
        
            }
        opciones= prompt("Ingrese el juego que desee sumar al carrito de compras: \n - fifa. \n -pes. \n -uncharted. \n -dishonored. \nPresiona 0 para finalizar")
        
            
        
        
    }

    




}else {
    alert("ingrese un nombre")
}

alert("gracias por elegirnos")

