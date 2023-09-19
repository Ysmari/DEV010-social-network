import { ingresarConCorreoContrasena} from '../FirebaseFn.js'
function register () {
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

  // BOTON REGISTRO
  const botonRegistro = document.createElement('button')
  botonRegistro.textContent = 'Registrarse'
  botonRegistro.classList.add('btn-register2')
  botonRegistro.addEventListener('click', () => {
    const emailValue =inputEmail.value; // me guarda informacion en variable
    const passwordValue = inputPass.value;
    
    function validarCorreo(email) {
      return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email);
    }
  
    if (!validarCorreo(emailValue)) {
      alert("Correo inválido"); // Muestra una alerta si el correo no es válido
      return;
    }
    if (!validarContrasenaDebil(passwordValue)) {
      alert("Contraseña débil. Debe tener al menos 6 caracteres y al menos un número.");
      return;
    }
  
    // Si el correo es válido, intenta el registro
    ingresarConCorreoContrasena(emailValue, passwordValue)
      .then((userCredential) => {
        // Si el registro es exitoso, puedes continuar aquí
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  });
    
   

  sectionOne.append(title, inputEmail, inputPass, botonRegistro) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
return sectionOne
}

export default register;