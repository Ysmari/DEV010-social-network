/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth'
import { auth } from './FirebaseConfig.js'
// FUNCION AUTENTICAR CON GOOGLE
const provider = new GoogleAuthProvider()

export const entrarConGoogle = () => {
  return signInWithPopup(auth, provider)
}
//FUNCION PARA CREAR USUSARIO CON EMAIL Y PASSWORD 
export const ingresarConCorreoContrasena =(email, password) => {
return createUserWithEmailAndPassword  (auth,email,password)
}
//FUNCION PARA ACCEDER A UNA CUENTA EXISTENTE CON EMAIL Y PASSWORD 
export const UsuarioConSesionActiva = (email, password) => {
  return signInWithEmailAndPassword  (auth,email,password)
}
//FUNCION PARA EVITAR CREAR DOS CUENTAS CON EL MISMO EMAIL 
export const CorreoYaRegistrado = (email) => {
  return fetchSignInMethodsForEmail (auth,email)
}
