window.addEventListener("load", function () {
    let contador = 0;
    let mensaje_blanco = " ";
    var boton = document.querySelector("#Boton_Click");
    var div_mensaje = document.querySelector("#parrafo");

    const frases = [
        "Titulo Ramdom 1", "Titulo Ramdom 2", "Titulo Ramdom 3", "Titulo Ramdom 4",
        "Titulo Ramdom 5", "Titulo Ramdom 6 ", "Titulo Ramdom 7", "Titulo Ramdom 8",
        "Titulo Ramdom 9", "Titulo Ramdom 10"
    ]

    function Contando() {
        contador++;
        document.querySelector("#Resu_division").innerHTML = contador;
        if (contador == 50) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html>Click Para Reiciar</a>";
        } else if (contador == 51) {
            div_mensaje.innerHTML = mensaje_blanco;
        } else if (contador == 100) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html>Click Para Reiciar</a>";
        } else if (contador == 101) {
            div_mensaje.innerHTML = mensaje_blanco;
        } else if (contador == 500) {
            div_mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)] + "<br><a href=juego.html>Click Para Reiciar</a>";
        } else if (contador == 501) {
            div_mensaje.innerHTML = mensaje_blanco;
        }
    }






    boton.addEventListener("click", function () {
        Contando();

    });

});