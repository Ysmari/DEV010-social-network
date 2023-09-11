
/* eslint-disable no-unused-vars */

import { entrarConGoogle } from "../FirebaseFn.js";



function login (navigateTo) {
    const sectionOne = document.createElement('section');
    sectionOne.classList.add('sectionOne');
    //TITULO
    const title = document.createElement('h1');
    title.textContent = 'HerCode';
    title.classList.add('HerCode');
    //INPUT EMAIL
    const inputEmail = document.createElement ('input');
    inputEmail.placeholder= 'ingresa tu correo'
    inputEmail.classList.add('imputLogin');
    //INPUT PASSWORD
    const inputPass = document.createElement ('input');
    inputPass.placeholder = 'ingresa tu contraseña';
    inputPass.classList.add('inputLogin');
    //BOTON INGRESA
    const buttonLogin = document.createElement ('button');
    buttonLogin.texContent = 'ingresar';
    buttonLogin.textContent = 'Ingresar';
    //BOTON INGRESA CON GOOGLE
    const buttonGoogle = document.createElement ('button');
    buttonGoogle.textContent= 'ACCEDER CON GOOGLE';
    buttonGoogle.classList.add('btn-google');
    //LOGOTIPO GOOGLE EN BOTON
    const googleImg = document.createElement ('img');
    googleImg.classList.add('googleImg');
    googleImg.src = '../Imagenes/g-logo.png'
    buttonGoogle.appendChild(googleImg);
    buttonGoogle.addEventListener('click',function(){
        entrarConGoogle()
        .then((user)=>{
            navigateTo('/programmingWall')
        }).catch((error)=>{
            alert('revisa tus datos')
        })
    });

    sectionOne.append(title, inputEmail, inputPass,buttonLogin, buttonGoogle); // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
        return sectionOne;
    
}

export default login;