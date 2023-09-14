/* eslint-disable no-unused-vars */

import { entrarConGoogle } from '../FirebaseFn.js'
import { ingresarConCorreoContrasena} from '../FirebaseFn.js'

function login (navigateTo) {
  const sectionOne = document.createElement('section')
  sectionOne.classList.add('sectionOne')
  // TITULO
  const title = document.createElement('h1')
  title.textContent = 'HerCode'
  title.classList.add('HerCode2')
  // BOTON INGRESO
  const buttonLogin0 = document.createElement('button')
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
  buttonLogin.addEventListener('click', () => {
    const emailValue =inputEmail.value; // me guarda informacion en variable
    const passwordValue = inputPass.value;
    
    console.log(emailValue)
    console.log(passwordValue)
    ingresarConCorreoContrasena(emailValue,passwordValue)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

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
      .then((user) => {
        navigateTo('/programmingWall')
      }).catch((error) => {
        alert('revisa tus datos')
      })
  })

  sectionOne.append(title, inputEmail, inputPass, buttonLogin, buttonGoogle) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return sectionOne
}

export default login

