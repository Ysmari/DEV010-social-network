import { entrarConGoogle } from '../FirebaseFn.js'
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
  inputPass.placeholder = 'Ingresa Contraseña'
  inputPass.classList.add('inputPass')
  // BOTON INGRESA
  const buttonLogin = document.createElement('button')
  buttonLogin.textContent = 'Ingresar'
  buttonLogin.classList.add('btn-login')
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
      .then((user) => {
        navigateTo('/programmingWall')
      }).catch((error) => {
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

export default login;





