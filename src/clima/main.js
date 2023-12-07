
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '19fa80fb8a2d5dddcc9f334c0db14f16'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {

    const idioma = 'es'
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&lang=${idioma}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    console.log(response)

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperatura = response.main.temp
    const humedad = response.main.humidity
    const descripcion = response.weather[0].description
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ` ${ciudadNombre} , ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es de: ${Math.floor(temperatura-difKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de: ${Math.floor(humedad)}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `Descripción meteorológica: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}