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
    const emailValue =inputEmail.value; // me guarda informacion en variable
    const passwordValue = inputPass.value;
    
    UsuarioConSesionActiva (emailValue, passwordValue)
    .then((userCredential) => {
      // El usuario ha iniciado sesión con éxito
      const user = userCredential.user;
      const uid = user.uid;
      // Aquí puedes hacer lo que necesites con el usuario autenticado
      console.log('Usuario autenticado con éxito:', user);
      navigateTo('/programmingWall')
    })
    .catch((error) => {
      // Manejar cualquier error que ocurra durante el inicio de sesión
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al iniciar sesión:', errorCode, errorMessage);
    });

    /*enviarInformacionCorreo(emailValue, passwordValue)
    .then(() => {
      // Correo electrónico de verificación enviado con éxito
    })
    .catch(error => {
      // Handle errors (por ejemplo, el usuario no está autenticado)
    });*/
    
});

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

export default login

