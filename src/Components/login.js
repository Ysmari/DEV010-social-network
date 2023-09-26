import { UsuarioConSesionActiva, entrarConGoogle } from '../FirebaseFn.js'
function login (navigateTo) {
  const sectionOne = document.createElement('section')
  sectionOne.classList.add('sectionOne')
  // TITULO
  const title = document.createElement('h1')
  title.textContent = 'HerCode'
  title.classList.add('HerCode2')
  // INPUT EMAIL
  const inputEmail = document.createElement('input')
  inputEmail.placeholder = 'Ingresa tu correo'
  inputEmail.classList.add('inputEmail')
  // INPUT PASSWORD
  const inputPass = document.createElement('input')
  inputPass.type = 'password'
  inputPass.placeholder = 'Ingresa Contraseña'
  inputPass.classList.add('inputPass')
  // BOTON INGRESA
  const buttonLogin = document.createElement('button')
  buttonLogin.textContent = 'Ingresar'
  buttonLogin.classList.add('btn-login')
  buttonLogin.addEventListener('click', () => {
    const emailValue = inputEmail.value // me guarda informacion en variable
    if (!emailValue.includes('@' && '.')) {
      alert('Ingresar un Correo Valido')
    }
    const passwordValue = inputPass.value
    if (passwordValue.length < 7) {
      alert('la contraseña debe tener mínimo 7 caracteres')
    }

    UsuarioConSesionActiva(emailValue, passwordValue)
      .then((userCredential) => {
      // El usuario ha iniciado sesión con éxito

        // Aquí puedes hacer lo que necesites con el usuario autenticado
        navigateTo('/programmingWall')
      })
      .catch((error) => {
        // Manejar cualquier error que ocurra durante el inicio de sesión
        const errorCode = error.code

        if (errorCode === 'auth/user-not-found') {
          alert('Usuario no encontrado')
        } else if (errorCode === 'auth/wrong-password') {
          alert('Verifica contraseña')
        }
      })
  })

  // BOTON INGRESA CON GOOGLE
  const buttonGoogle = document.createElement('button')
  buttonGoogle.textContent = 'ACCEDER CON GOOGLE'
  buttonGoogle.classList.add('btn-google')
  // LOGOTIPO GOOGLE EN BOTON
  const googleImg = document.createElement('img')
  googleImg.classList.add('googleImg')
  googleImg.src = '../Imagenes/g-logo.png'
  buttonGoogle.appendChild(googleImg)
  buttonGoogle.addEventListener('click', function () {
    entrarConGoogle()
      .then(() => {
        navigateTo('/programmingWall')
      }).catch(() => {
        alert('revisa tus datos')
      })
  })
  // BOTON REGISTRO
  const registerbutton = document.createElement('button')
  registerbutton.textContent = 'Registrate'
  registerbutton.classList.add('btn-register')
  registerbutton.addEventListener('click', () => {
    navigateTo('/register')
  })

  sectionOne.append(title, inputEmail, inputPass, buttonLogin, buttonGoogle, registerbutton) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return sectionOne
}

export default login
