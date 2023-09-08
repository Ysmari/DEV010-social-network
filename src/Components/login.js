import { onNavigate  } from "../main.js";
import { entrarConGoogle } from "../FirebaseFn.js";

//const auth = getAuth();
export const login = () => {
    const div = document.createElement('div'); // se crea para insertar el boton
    div.classList.add('screen-login')

    const title = document.createElement('h1');
    title.textContent = 'HerCode';
    title.classList.add('HerCode');

    const section = document.createElement('section')
    section.classList.add('section-login')
//INPUT PARA INGRESAR CORREO
    const inputEmail = document.createElement('input');
    inputEmail.textContent = "Ingresa tu correo electrónico";
    inputEmail.classList.add('input-email');
//INPUT PARA INGRESAR CONTRASEÑA
    const inputPass = document.createElement('input');
    inputPass.textContent = "Ingresa tu contraseña";
    inputPass.classList.add = ('input-pass');
//BOTON INGRESAR
    const loginButton= document.createElement('button'); 
    loginButton.textContent = 'Ingresar'; 
    loginButton.classList.add = ('btn-login')
//BOTON INGRESAR CON GOOGLE
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
    div.append(title,inputEmail,inputPass,loginButton,googleBotton);// append()uctiliza para agregar uno o varios elementos 
    return div;
    };