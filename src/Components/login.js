/* eslint-disable no-unused-vars */

import { entrarConGoogle } from "../FirebaseFn.js";



function login (navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h1');
    const inpuEmail = document.createElement ('input');
    const inpuPass = document.createElement ('input');
    const buttonLogin = document.createElement ('button');
    const buttonGoogle = document.createElement ('button');
    

    inpuEmail.placeholder = 'Iingresa correo';
    inpuPass.placeholder  = 'Ingresa Contraseña'

    title.textContent = 'Ingresar';
    buttonLogin.textContent = 'Ingresar';
    buttonGoogle.textContent= 'ingreso Google';
    buttonGoogle.addEventListener('click',function(){
        entrarConGoogle()
        .then((user)=>{
            navigateTo('/programmingWall')
        }).catch((error)=>{
            alert('revisa tus datos')
        })
    });

    


    section.append(title,inpuEmail, inpuPass,buttonLogin, buttonGoogle); // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
        return section;
    
        

}

export default login;