function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    let body = document.querySelector("body");

    // msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 6) {
            // Boa madrugada!
        img.src = 'imagens/madrugada.png'

    } else if (hora >= 6 && hora < 12) {
            // Bom dia!
        img.src = 'imagens/dia.png'
     
    } else if (hora >= 12 && hora < 18) {
            // Bom tarde! 
        img.src = 'imagens/tarde.png'

    } else {
            // Bom noite! 
        img.src = 'imagens/noite.png'
                   
    }
}

/* 

boamadrugada.url = "imagens/madrugada.png";

if (hora >= 0 && hora < 6) {
    // Bom madrugada!
img.src = ''
document.body.style.backgroundImage = 'imagens/madrugada.png';
} else if (hora >= 6 && hora < 12) {
    // Bom dia!
img.src = '
document.body.style.backgroundImage = 'imagens/dia.png';     
} else if (hora >= 12 && hora < 18) {
    // Bom tarde! 
img.src = ''
} else {
    // Bom noite! 
img.src = ''
document.body.style.background-image = 'imagens/noite.png';           
}
}

*/

setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";
 
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
 
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
 
            let currentTime = hour + ":"
                + min + ":" + sec + am_pm;
 
            document.getElementById("clock")
                .innerHTML = currentTime;
        }
 
        showTime();

// fim do relógio
// começo do calendário

//  setInterval(showTime, 1000);
//         function showTime() {
//             let time = new Date();
//             let hour = time.getDate();

//             day = 

//             let currentDate = 
            
//             document.getElementById("data")
//                 .innerHTML = currentDate;

//         }
