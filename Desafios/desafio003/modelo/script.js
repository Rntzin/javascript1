function carregar() {
    let msg = document.querySelector("#msg")
    let img = document.querySelector("#imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        // BOM DIA]
        img.src = "manhã.jpg"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18 ){
        // BOA TARDE
        img.src = "tarde.jpg"
        document.body.style.background = "lightblue"
    }
    else {
        // BOA NOITE
        document.body.style.background = "#515154"
    }
}