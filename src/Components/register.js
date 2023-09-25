import { registrarConCorreoContrasena } from '../FirebaseFn.js'

function register (navigateTo) {
  const sectionOne = document.createElement('section')
  sectionOne.classList.add('sectionOne')
  // TITULO
  const title = document.createElement('h1')
  title.textContent = 'HerCode'
  title.classList.add('HerCode2')
  // INPUT NOMBRE
  const inputnombre = document.createElement('input')
  inputnombre.placeholder = 'Ingresa tu nombre'
  inputnombre.classList.add('inputnombre')
  inputnombre.id = 'inputNombre'
  // INPUT EMAIL
  const inputEmail = document.createElement('input')
  inputEmail.placeholder = 'Ingresa tu correo'
  inputEmail.classList.add('inputEmail')
  inputEmail.id = 'emailVerificado'
  // INPUT PASSWORD
  const inputPass = document.createElement('input')
  inputPass.type = 'password'
  inputPass.placeholder = 'Ingresa Contraseña'
  inputPass.classList.add('inputPass')

  // BOTON REGISTRO
  const botonRegistro = document.createElement('button')
  botonRegistro.textContent = 'Registrarse'
  botonRegistro.classList.add('btn-register2')
  botonRegistro.addEventListener('click', () => {
    // ME TRAE EL DATO INGRESADO NOMBRE
    localStorage.setItem('name', inputnombre.value)
    const emailValue = inputEmail.value // me guarda informacion en variable
    if (!emailValue.includes('@' && '.')) {
      alert('Ingresar un Correo Valido')
      return // Sale de la función si el correo no es válido
    }
    const passwordValue = inputPass.value
    if (passwordValue.length < 7) {
      alert('La contraseña debe tener mínimo 7 caracteres')
      return // Sale de la función si la contraseña es demasiado corta
    }

    // LO TESTEO CON EL MOCK YA QUE ES FIREBASE
    registrarConCorreoContrasena(emailValue, passwordValue)
      .then((userCredential) => {
        // El usuario se creó con éxito
        const user = userCredential.user
        console.log('Usuario creado:', user.uid)
        navigateTo('/welcome')
      })
      .catch((error) => {
        // Ocurrió un error durante la creación del usuario
        console.log(error.code)
        const errorCode = error.code
        const errorMessage = error.message

        if (errorCode === 'auth/email-already-in-use') {
          alert('Correo electrónico ya en uso')
        } else if (errorCode === 'auth/invalid-email') {
          alert('Correo electrónico no válido')
        } else {
          alert('Error desconocido:', errorMessage)
        }
      })
  })
  sectionOne.append(inputnombre, title, inputEmail, inputPass, botonRegistro) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return sectionOne
}
export default register
