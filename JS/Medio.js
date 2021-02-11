window.addEventListener("load", function () {
    let counter = 0;
    let message_white = " ";
    var button = document.querySelector("#Boton_Click");
    var div_message = document.querySelector("#parrafo");

    const answer = ["Ya perdiste jajaja", "Sigue intentado", "Qué pendejo estas", "Vulve a intentarlo", "JAJAJAJAJA",
        "¿Qué?, ¿No puedes ganar?", "Eres un perdedor", "Pinche cara de mi miembro", "Pinche chairo estúpido", "F en el chat shavales"];

    var randomImage = new Array();
    randomImage[0] = "img/Img_Win/win1.jpg";
    randomImage[1] = "img/Img_Win/win2.jpeg";
    randomImage[2] = "img/Img_Win/win3.jpg";
    randomImage[3] = "img/Img_Win/win4.jpg";
    randomImage[4] = "img/Img_Win/win5.jpg";
    randomImage[5] = "img/Img_Win/win6.jpg";
    randomImage[6] = "img/Img_Win/win7.jpg";
    randomImage[7] = "img/Img_Win/win8.jpg";
    randomImage[8] = "img/Img_Win/win9.PNG";
    randomImage[9] = "img/Img_Win/win10.jpg";

    function getRandomImage() {
        var number = Math.floor(Math.random() * randomImage.length);
        div_message.innerHTML = ('<a href=index.html><img id=generator title="Click aqui" src="' + randomImage[number] + '" /></a>');
    }
    let randomAlatorio = (aleatorio, num) => {
        if (aleatorio == num) { //Bloquear 
            button.style.background = "#ccc";
            button.disabled = true;
            div_message.innerHTML = answer[Math.floor(Math.random() * answer.length)] + "<br><a href=Medio.html><button type=button id= Reinicio>Reiniciar</button></a>" +
                "<a href=index.html><button type=button id= Game_Over>Rendirse</button></a>";
        }
    }
    div_message.innerHTML = "Nivel Medio";
    document.querySelector("#Resu_division").innerHTML = "0" + " Veces";
    function Contando() {
        var aleatorio = Math.round(Math.random() * 40);
        counter++;
        document.querySelector("#Resu_division").innerHTML = counter + " Veces";
        if (counter == 1) {//Quitar el mensaje
            div_message.innerHTML = message_white;
        }
        randomAlatorio(aleatorio, 5);
        randomAlatorio(aleatorio, 15);
        if (counter == 50) {//GANAR 
            getRandomImage();
            button.disabled = true;
            button.style.background = "#ccc";
        }
    }
    button.addEventListener("click", function () { Contando(); });

});