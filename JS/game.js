window.addEventListener("load", function () {
    let counter = 0;
    let message_white = " ";
    var button = document.querySelector("#Boton_Click");
    var div_message = document.querySelector("#parrafo");

    const phrases = [
        "Titulo Ramdom 1", "Titulo Ramdom 2", "Titulo Ramdom 3", "Titulo Ramdom 4",
        "Titulo Ramdom 5", "Titulo Ramdom 6 ", "Titulo Ramdom 7", "Titulo Ramdom 8",
        "Titulo Ramdom 9", "Titulo Ramdom 10"];

    const answer = ["Random 1", "Random 2", "Random 3", "Random 4", "Random 5",
        "Random 6", "Random 7", "Random 8", "Random 9", "Random 10"];

    document.querySelector("#Resu_division").innerHTML = "0" + " Veces";
    function Contando() {
        counter++;
        document.querySelector("#Resu_division").innerHTML = counter + " Veces";
        if (counter == 50) {
            div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (counter == 51) {
            div_message.innerHTML = message_white;
        } else if (counter == 100) {
            div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (counter == 101) {
            div_message.innerHTML = message_white;
        } else if (counter == 500) {
            div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (counter == 501) {
            div_message.innerHTML = message_white;
        } else if (counter == 1000) {
            div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (counter == 1001) {
            div_message.innerHTML = message_white;
        } else if (counter == 6000) {
            div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>¿Ya te rindes pendejo?</button></a>";
        } else if (counter == 6001) {
            div_message.innerHTML = message_white;
        } else if (counter == 10000) {
            div_message.innerHTML = answer[Math.floor(Math.random() * answer.length)];
            button.style.background = "#ccc";
            button.disabled = true;
        }
    }

    button.addEventListener("click", function () {
        Contando();

    });

});