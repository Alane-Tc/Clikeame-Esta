window.addEventListener("load", function () {
    let counter = 0;
    let message_white = " ";
    var button = document.querySelector("#Boton_Click");
    var div_message = document.querySelector("#parrafo");

    const phrases = [
        "Titulo Ramdom 1", "Titulo Ramdom 2", "Titulo Ramdom 3", "Titulo Ramdom 4",
        "Titulo Ramdom 5", "Titulo Ramdom 6 ", "Titulo Ramdom 7", "Titulo Ramdom 8",
        "Titulo Ramdom 9", "Titulo Ramdom 10"];

    const answer = ["Ya perdiste jajaja", "Sigue intentado", "Qué pendejo estas", "Vulve a intentarlo", "JAJAJAJAJA",
    "¿Qué?, ¿No puedes ganar?", "Eres un perdedor", "Ya rindete joder", "Pinche chairo estúpido", "F en el chat shavales"];

    document.querySelector("#Resu_division").innerHTML = "0" + " Veces";
    function Contando() {
        var aleatorio = Math.round(Math.random() * 20);
        counter++;
        document.querySelector("#Resu_division").innerHTML = counter + " Veces";
        if (aleatorio == 5) { //Bloquear 
            button.style.background = "#ccc";
            button.disabled = true;
            div_message.innerHTML = answer[Math.floor(Math.random() * answer.length)] + "<br><a href=juego.html><button type=button id= Reinicio>Reiniciar</button></a>"+
            "<a href=index.html><button type=button id= Game_Over>Rendirse</button></a>";
        }
        if (counter == 50) {//GANAR 
            div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=juego.html><button type=button id= Reinicio>Felicidades, juega de nuevo culo</button></a>";
            button.disabled = true;
            button.style.background = "#ccc";
        }    
    }
    button.addEventListener("click", function () {
        Contando();

    });
});