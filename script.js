function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 6) {
            // Bom madrugada!
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '2b2b2b'
    } else if (hora >= 6 && hora < 12) {
            // Bom dia!
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#e2cd9f'       
    } else if (hora >= 12 && hora < 18) {
            // Bom tarde! 
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'           
    } else {
            // Bom noite! 
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#000000'           
    }
}