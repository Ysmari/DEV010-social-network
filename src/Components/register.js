import { ingresarConCorreoContrasena} from '../FirebaseFn.js'
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
    const emailValue =inputEmail.value; // me guarda informacion en variable
    if (emailValue.includes ('@' && '.')) {
      alert ("Correo Valido");
    } else {
      alert ("Ingresar un Correo Valido");
      }
    const passwordValue = inputPass.value;  
    if (passwordValue.length>= 7) {
      alert ("Contraseña Valida");
    } else {
      alert ("la contraseña debe tener minimo 7 caracteres");
    }
    ingresarConCorreoContrasena(emailValue,passwordValue)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigateTo('/welcome')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  })

  sectionOne.append(title, inputEmail, inputPass, botonRegistro, inputnombre) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
return sectionOne
}

export default register