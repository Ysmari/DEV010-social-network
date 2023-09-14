import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth' // FUNCION AUTENTICAR CON GOOGLE
import { createUserWithEmailAndPassword } from 'firebase/auth' // FUNCION CREAR USUARIO
import { auth } from './FirebaseConfig.js'
// FUNCION AUTENTICAR CON GOOGLE
const provider = new GoogleAuthProvider()
export const entrarConGoogle = () => {
  return signInWithPopup(auth, provider)
}
// FUNCION CREAR USUSARIO
// const auth = getAuth(app)
function registrarUsuario(email, password){
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
  })
}