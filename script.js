function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    let bomdia = document.querySelector("body");
    let boatarde = document.querySelector("body");
    let boanoite = document.querySelector("body");
    let boamadrugada = document.querySelector("body");

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 6) {
            // Bom madrugada!
        img.src = ''
        boamadrugada.url = "imagens/madrugada.png";
    } else if (hora >= 6 && hora < 12) {
            // Bom dia!
        img.src = ''
        bomdia.url = "imagens/dia.png";     
    } else if (hora >= 12 && hora < 18) {
            // Bom tarde! 
        img.src = ''
        boatarde.url = "imagens/tarde.png";
    } else {
            // Bom noite! 
        img.src = ''
        boanoite.url = "imagens/noite.png";           
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
document.body.style.backgroundAttachment = 'black';           
}
}

*/