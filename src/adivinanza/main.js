
let numeroAzar = Math.floor(Math.random() * 100) + 1 // Se suma 1 para que el 100 quede incluido

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

// Función insertada en el input con el evento onclick en HTML
function chequearResultado() {

    intentos++
    intento.textContent = `Cantidad de intentos: ${intentos}`

    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor ingresa un número entre el 1 y el 100"
        mensaje.style.color = "yellow"
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = "Felicitaciones, has acertado 😉"
        mensaje.style.color = "green"
        numeroEntrada.disabled = true // Si acierta se deshabilita el input
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "Intenta de nuevo, el número es más alto"
        mensaje.style.color = "red"
    } else {
        mensaje.textContent = "Intenta de nuevo, el número es más bajo"
        mensaje.style.color = "red"
    }
}

