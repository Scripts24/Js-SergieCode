import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {

        //Remover clase active a todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove("active")
        })

        // Agregar clase active al que le hicimos click
        this.classList.add('active')// this hace referencia al enlace

        // Obtener el contenido correspondiente al enlace seleccionado

        // Obtener el contenido correspondiente al enlace seleccionado
        let contenido;
        if (this.id === 'inicio') {
            contenido = obtenerContenidoInicio();
        } else {
            contenido = obtenerContenido(this.textContent);
        }

        // Mostrar contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

        // Cambiar la imagen de fondo dinámicamente
        document.getElementById('contenedorImagen').style.background = `url(${contenido.imagen}) no-repeat center center / cover`;

    })

})

// Función para traer la información del archivo ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres
    }
    return contenido[enlace]
}

// Función para traer la información de bienvenida
function obtenerContenidoInicio() {
    let contenidoInicio = {
        titulo: 'Bienvenidos a nuestra web!',
        subtitulo: 'Elige tu próximo destino',
        parrafo: 'Compra los mejores paquetes de viaje a un precio inmejorable',
        precio: '',
        imagen: './img/bg.jpg'
    };
    return contenidoInicio;
}