import { onNavigate  } from "../main.js";
import { entrarConGoogle } from "../FirebaseFn.js";


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

        entrarConGoogle()
        // .then((user)=>{
        //     onNavigate('/muro')
        // }).catch((error)=>{
        //     alert('revisa tus datos')
        // })

    })
   
    title.textContent = 'Ingresar';
    startButton.textContent = 'Ingresar'; //Agregar texto a boton
  
    
   
    div.append(title,inputEmail,inputPass,startButton,googleBotton);// append()uctiliza para agregar uno o varios elementos 
    return div;

    };