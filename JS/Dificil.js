window.addEventListener("load", function(){
    let counter = 0;
    var button = document.querySelector("#Boton_Click");
    var div_message = document.querySelector("#parrafo");

    const phrases = [
        "Que grande", "Felicidades crack", "GG", "Good Game",
        "Ahuevo ganaste", "Juega otra culo ", "Crack", "WOW",
        " Quede Impactado", "No puede ser =("];

    const answer = ["Ya perdiste jajaja", "Sigue intentado", "Qué pendejo estas", "Vulve a intentarlo", "JAJAJAJAJA",
        "¿Qué?, ¿No puedes ganar?", "Eres un perdedor", "Pinche cara de mi miembro", "Pinche chairo estúpido", "F en el chat shavales"];

    document.querySelector("#Resu_division").innerHTML = "0" + " Veces";
    function Contando() {
        var aleatorio = Math.round(Math.random() * 70);
        counter++;
        console.log(aleatorio);
        document.querySelector("#Resu_division").innerHTML = counter + " Veces";
        if (aleatorio == 5) { //Bloquear 
            button.style.background = "#ccc";
            button.disabled = true;
            div_message.innerHTML = answer[Math.floor(Math.random() * answer.length)] + "<br><a href=Dificil.html><button type=button id= Reinicio>Reiniciar</button></a>" +
            "<a href=index.html><button type=button id= Game_Over>Rendirse</button></a>";
        }

        if (aleatorio == 15) { //Bloquear 
            button.style.background = "#ccc";
            button.disabled = true;
            div_message.innerHTML = answer[Math.floor(Math.random() * answer.length)] + "<br><a href=Dificil.html><button type=button id= Reinicio>Reiniciar</button></a>" +
            "<a href=index.html><button type=button id= Game_Over>Rendirse</button></a>";
        }

        if (aleatorio == 25) { //Bloquear 
            button.style.background = "#ccc";
            button.disabled = true;
            div_message.innerHTML = answer[Math.floor(Math.random() * answer.length)] + "<br><a href=Dificil.html><button type=button id= Reinicio>Reiniciar</button></a>" +
            "<a href=index.html><button type=button id= Game_Over>Rendirse</button></a>";
        }

        if (counter == 50) {//GANAR 
            div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=index.html><button type=button id= End>Felicidades</button></a>";
            button.disabled = true;
            button.style.background = "#ccc";
        }
    }
    button.addEventListener("click", function () {
        Contando();
    });

});