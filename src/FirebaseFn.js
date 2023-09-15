/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from './FirebaseConfig.js'
// FUNCION AUTENTICAR CON GOOGLE
const provider = new GoogleAuthProvider()

export const entrarConGoogle = () => {
  return signInWithPopup(auth, provider)
}

export const ingresarConCorreoContrasena =(email, password) => {
return createUserWithEmailAndPassword  (auth,email,password)
}

