import { onNavigate  } from "../main.js";
import { entrarConGoogle } from "../FirebaseFn.js";


//const auth = getAuth();

export const login = () => {
    const div = document.createElement('div'); // se crea para insertar el boton
    div.classList.add('screen-login')

    const section = document.createElement('section')
    section.classList.add('section-login')

    const title = document.createElement('h1');
    title.textContent = 'HerCode';
    title.classList.add('HerCode');

    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input')
    const startButton= document.createElement('button'); 
    const googleBotton = document.createElement('button');
    googleBotton.textContent= 'Entrar con Google';
    googleBotton.addEventListener("click", ()=>{

        entrarConGoogle()
        .then((user)=>{
            onNavigate('/programmingWall')
        }).catch((error)=>{
            alert('revisa tus datos')
        })
    })
    startButton.textContent = 'Ingresar'; //Agregar texto a boton
    
    div.append(title,inputEmail,inputPass,startButton,googleBotton);// append()uctiliza para agregar uno o varios elementos 
    return div;
    };