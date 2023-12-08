//* Vinculación a Firebase

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAsSlfB0hBw5Gfh6YtR159_UhJNEcSte_4",
    authDomain: "form-datos.firebaseapp.com",
    projectId: "form-datos",
    storageBucket: "form-datos.appspot.com",
    messagingSenderId: "154189285119",
    appId: "1:154189285119:web:7b459cbf86fa8d12d3aeca",
    measurementId: "G-RLHDF1WDVN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//console.log("Firebase initialized")

// Initialize Firestore
const db = firebase.firestore();
//console.log("Firestore initialized");

//* Validación y envío del formulario

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    //* Validar campo nombre

    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor ingresa tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }


    //* Validar correo electrónico

    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor ingresa un correo válido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //* Validar la contraseña

    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas y caracteres especiales'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    //* Si los campos son válidos entonces se envía el formulario

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {

        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                Toastify({
                    text: "Registro exitoso",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                        marginTop: '70px',
                    },

                }).showToast();

                document.getElementById('formulario').reset();
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

    }
})