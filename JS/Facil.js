window.addEventListener("load", function () {
    let counter = 0;
    let message_white = " ";
    var button = document.querySelector("#Boton_Click");
    var div_message = document.querySelector("#parrafo");

    /*const phrases = [
        "Que grande", "Felicidades crack", "GG", "Good Game",
        "Ahuevo ganaste", "Juega otra culo ", "Crack", "WOW",
        " Quede Impactado", "No puede ser =("];*/

    const answer = ["Ya perdiste jajaja", "Sigue intentado", "Qué pendejo estas", "Vulve a intentarlo", "JAJAJAJAJA",
    "¿Qué?, ¿No puedes ganar?", "Eres un perdedor", "Pinche cara de mi miembro", "Pinche chairo estúpido", "F en el chat shavales"];

    var randomImage = new Array();
    randomImage[0] = "img/Img_Win/win1.jpg";
    randomImage[1] = "img/Img_Win/win2.jpeg";
    randomImage[2] = "img/Img_Win/win3.jpg";
    
    function getRandomImage() { 
        var number = Math.floor(Math.random()*randomImage.length);
        div_message.innerHTML=('<a href=index.html><img id=generator title="Click aqui" src="'+randomImage[number]+'" /></a>');
        }

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
           // div_message.innerHTML = phrases[Math.floor(Math.random() * phrases.length)] + "<br><a href=index.html><button type=button id= End>Felicidades</button></a>";
           getRandomImage();
            button.disabled = true;
            button.style.background = "#ccc";
        }    
    }
    button.addEventListener("click", function () {
        Contando();

    });
});