function carregar(){

    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById ('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
  if ( hora >= 0 && hora < 13 ){

    foto.src = 'diaft.jpg';
    foto.alt = 'bom dia!'
    document.body.style.background = '#ffe8b2'

  }
  else if (hora >= 13 && hora < 19 ){

    foto.src = 'tardeft.jpg'
    foto.alt = 'boa tarde'
    document.body.style.background = '#4c6a75' 
  }
  else {
    foto.src = 'noiteft.jpg'
    foto.alt = 'boa noite'
    document.body.style.background = '#012839'
  }
}
