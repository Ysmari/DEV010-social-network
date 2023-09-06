import { onNavigate  } from "../main.js";

export const ingreso = () => {
    const div =document.createElement('div'); // se crea para insertar el boton
    const title = document.createElement('h1');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input')
    const startButton= document.createElement('button');
    
   
    title.textContent = 'Ingresar';
    startButton.textContent = 'Ingresar'; //Agregar texto a boton
  
    
   
    div.append(title,inputEmail,inputPass,startButton);// append()uctiliza para agregar uno o varios elementos 
    return div;

    };