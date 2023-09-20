import { ingresarConCorreoContrasena, CorreoYaRegistrado } from '../FirebaseFn.js'

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
    localStorage.setItem('name', inputnombre.value)
    const emailValue = inputEmail.value // me guarda informacion en variable
    if (!emailValue.includes('@' && '.')) {
      alert('Ingresar un Correo Valido')
    }
    const passwordValue = inputPass.value
    if (passwordValue.length < 7) {
      alert('la contraseña debe tener mínimo 7 caracteres')
    }
    ingresarConCorreoContrasena(emailValue, passwordValue)
      .then((userCredential) => {
      // Signed in

        navigateTo('/welcome')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error('Error al iniciar sesión:', errorCode, errorMessage)

      // ..
      })
    CorreoYaRegistrado(emailValue)
      .then(function (methods) {
        if (methods.length > 0) {
          alert('El correo electrónico ya está registrado')
        }
      })
  })
  sectionOne.append(inputnombre, title, inputEmail, inputPass, botonRegistro) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return sectionOne
}
export default register
