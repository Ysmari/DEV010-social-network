/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, addDoc, query, doc, deleteDoc, updateDoc } from 'firebase/firestore'
// (auth y db) es uctilizado para acceder a funciones de autenticacion (firebase))
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
// FUNCION PARA CERRAR SESION
export const exit = () => signOut(auth)

export const qFn = () => query(collection(db, 'posts'))

// FUNCION PARA LIKES
// FUNCION PARA ELIMINAR POST
export const deletePost = (postId) => deleteDoc(doc(db, 'posts', postId))

// FUNCION PARA EDITAR POST
// export const editPost = (postId, updatedData) => updateDoc (doc(db, 'posts', postId))

export const editPost = (postEditarId, updatedData) => {
  const postRef = doc(db, 'posts', postEditarId)
  return updateDoc(postRef, updatedData)
} 

