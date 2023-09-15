/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider,} from 'firebase/auth'
import { auth } from './FirebaseConfig.js'


const provider = new GoogleAuthProvider()

export const entrarConGoogle = () => {
  return signInWithPopup(auth, provider)
}






