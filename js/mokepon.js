let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionarMascotaJugador() {
    let sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSelecionarAtaque.style.display = "flex"

    let sectionSelecionarMascota = document.getElementById("seleccionar-mascota")
    sectionSelecionarMascota.style.display = "none"

    let inputHipodoge = document.getElementById("hipodoge")
    inputHipodoge.style.display = "none"
    let inputCapipepo = document.getElementById("capipepo")
    inputCapipepo.style.display = "none"
    let inputRatigueya = document.getElementById("ratigueya")
    inputRatigueya.style.display = "none"
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    
    
    if (inputHipodoge.checked) { 
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else
        alert("SELECCIONA UNA MASCOTA")

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else 
        spanMascotaEnemigo.innerHTML = "Ratigueya"
}

function iniciarJuego() {
    let botonDeReiniciar = document.getElementById("reiniciar")
    botonDeReiniciar.style.display = "none"

    let sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSelecionarAtaque.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()

    

}



function crearMensaje() {
    let seccionMensajes = document.getElementById("resultado")
    let ataquesJugador = document.getElementById("ataques-jugador")
    let ataquesEnemigo = document.getElementById("ataques-enemigo")

    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    //let parrafo = document.createElement("p")
    //parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador +  " la mascota del enemigo ataco con " + ataqueEnemigo + " - " + resultado

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)

}

function crearMensajeFinal(resultadoFinal) {
    let seccionMensajes = document.getElementById("resultado")
    
    seccionMensajes.innerHTML = resultadoFinal
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA"
    } 

    combate()

}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    
    if (ataqueJugador == ataqueEnemigo) {
        resultado = "EMPATE"
        crearMensaje()
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        resultado = "GANASTE"
        crearMensaje()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        revisarVidas()
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        resultado = "GANASTE"
        crearMensaje()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        revisarVidas()
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        resultado = "GANASTE"
        crearMensaje()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        revisarVidas()
    } else {
        resultado = "PERDISTE"
        crearMensaje()
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        revisarVidas()
    }

}

function revisarVidas() {
    let botonDeReiniciar = document.getElementById("reiniciar")
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
        botonDeReiniciar.style.display = "block"
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste :(")
        botonDeReiniciar.style.display = "block"
    }
} 

function reiniciarJuego() {
    location.reload()
}







window.addEventListener("load", iniciarJuego)