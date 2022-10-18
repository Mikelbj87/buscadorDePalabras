//  guardamos en la variable caja el contenido del input con id palabra
let caja = document.querySelector("#palabra");
//al hacer click en botón buscar llamará a la funcion BuscarTexto
buscar.addEventListener("click", BuscarPalabra, true)
//funcion BuscarPalabra, a la que no pasamos ningún argumento, busca en un texto en la carpeta HTML la palabra
//que introduzcamos en el contenedor con id palabra
function BuscarPalabra() {
    // creamos la variable cajas donde metemos en una lista todos los elementos del texto entre div
    let cajas = document.querySelectorAll("#cajas div");
    //bucle for que recorre la lista de elementos cajas
    for (i = 0; i < cajas.length; i++) {
        let informacion = cajas[i].innerHTML;
        //resalta las letras seleccionadas si estan dentro del texto y las pone en color rojo
        let result = informacion.replaceAll(caja.value, "<b style='color:red'>" + caja.value + "</b>")
        cajas[i].innerHTML = result;
    }
}