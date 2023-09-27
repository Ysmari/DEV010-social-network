/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { auth, db } from './FirebaseConfig.js'

// FUNCION AUTENTICAR CON GOOGLE
const provider = new GoogleAuthProvider()

export const entrarConGoogle = () => {
  return signInWithPopup(auth, provider)
}
// FUNCION CREAR UNA CUENTA CON EMAIL Y PASS
export const registrarConCorreoContrasena = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}
// FUNCION PARA ACCEDER A UNA CUENTA EXISTENTE CON EMAIL Y PASSWORD
export const UsuarioConSesionActiva = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
// FUNCION PARA CREAR POST
export const createPostProgrammingWall = (obj) => {
  return addDoc(collection(db, 'posts'), obj)
}

export const exit = () => signOut(auth)
