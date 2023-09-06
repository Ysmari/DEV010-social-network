import { onNavigate  } from "../main.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
const provider = new GoogleAuthProvider();


//const auth = getAuth();

export const ingreso = () => {
    const div =document.createElement('div'); // se crea para insertar el boton
    const title = document.createElement('h1');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input')
    const startButton= document.createElement('button');
    const googleBotton = document.createElement('button');
    googleBotton.textContent= 'Entrar Google';
    googleBotton.addEventListener("click", ()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
        

    })
   
    title.textContent = 'Ingresar';
    startButton.textContent = 'Ingresar'; //Agregar texto a boton
  
    
   
    div.append(title,inputEmail,inputPass,startButton,googleBotton);// append()uctiliza para agregar uno o varios elementos 
    return div;

    };