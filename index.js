function carregar(){
    let msg = window.document.getElementById('msg');
    let imagem = window.document.getElementById('imagem')

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    msg.innerHTML = `Agora são <span>${hora}:${minutos}</span> horas`

    if(hora >= 00 && hora < 12){
        // bom dia
        imagem.src ='/imagens/dia.png'
    }

    else if(hora >= 12 && hora < 18){
        // boa tarde
        imagem.src = '/imagens/tarde.png'
    }

    else{
        // boa noite
        imagem.src = '/imagens/noite.png'
    }

}

