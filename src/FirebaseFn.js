/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./FirebaseConfig.js";
//singInWithPopup=iniciar sesion con ventana emergente
//googleAuthProvider= provedor de autenticacion de google


const provider = new GoogleAuthProvider();

export const entrarConGoogle = () => {

    return signInWithPopup(auth, provider)

}
