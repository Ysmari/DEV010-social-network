import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, addDoc, query, doc, deleteDoc, updateDoc, onSnapshot, increment } from 'firebase/firestore'
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
  if (auth.currentUser) {
    const newObj = {
      ...obj,
      email: auth.currentUser.email
    }
    return addDoc(collection(db, 'posts'), newObj)
      .then((docRef) => {
        return docRef // Devolver docRef en caso de éxito
      })
      .catch((error) => {
        console.error('Error al agregar el documento: ', error)
        throw error // Rechazar la promesa en caso de error
      })
  }
}
export const q = query(collection(db, 'posts'))
export const getPosts = (callback) => {
  onSnapshot(q, callback)
}
// FUNCION PARA CERRAR SESION
export const exit = () => signOut(auth)

// FUNCION PARA LIKES
export const likes = async (postLikId) => {
  const postRedf = doc(db, 'post', postLikId)
  return updateDoc(postRedf, { likes: increment(1) })
}
// FUNCION PARA ELIMINAR POST
export const deletePost = (postId) => deleteDoc(doc(db, 'posts', postId))

// FUNCION PARA EDITAR POST
// export const editPost = (postId, updatedData) => updateDoc (doc(db, 'posts', postId))

export const editPost = (postEditarId, updatedData) => {
  const postRef = doc(db, 'posts', postEditarId)
  return updateDoc(postRef, updatedData)
}
