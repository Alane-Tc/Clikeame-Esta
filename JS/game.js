window.addEventListener("load", function () {
    let contador = 0;
    let mensaje_blanco = " ";
    var boton = document.querySelector("#Boton_Click");
    var div_mensaje = document.querySelector("#parrafo");

    const frases = [
        "Titulo Ramdom 1", "Titulo Ramdom 2", "Titulo Ramdom 3", "Titulo Ramdom 4",
        "Titulo Ramdom 5", "Titulo Ramdom 6 ", "Titulo Ramdom 7", "Titulo Ramdom 8",
        "Titulo Ramdom 9", "Titulo Ramdom 10"];

    const respuesta = ["Random 1","Random 2","Random 3","Random 4","Random 5",
    "Random 6", "Random 7", "Random 8", "Random 9", "Random 10"];

    document.querySelector("#Resu_division").innerHTML = "0"+ " Veces";
    function Contando() {
        contador++;
        document.querySelector("#Resu_division").innerHTML = contador + " Veces";
        if (contador == 50) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (contador == 51) {
            div_mensaje.innerHTML = mensaje_blanco;
        } else if (contador == 100) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (contador == 101) {
            div_mensaje.innerHTML = mensaje_blanco;
        } else if (contador == 500) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (contador == 501) {
            div_mensaje.innerHTML = mensaje_blanco;
        } else if (contador == 1000) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (contador == 1001) {
            div_mensaje.innerHTML = mensaje_blanco;
        } else if (contador == 6000) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (contador == 6001) {
            div_mensaje.innerHTML = mensaje_blanco;
        } else if (contador == 10000) {
            div_mensaje.innerHTML = respuesta[Math.floor(Math.random() * respuesta.length)];
            boton.style.background = "#ccc";
            boton.disabled = true;
        }
    }

    boton.addEventListener("click", function () {
        Contando();

    });

});