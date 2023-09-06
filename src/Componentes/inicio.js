import { onNavigate  } from "../main.js";

export const inicio = () => {
    const div =document.createElement('div'); // se crea para insertar el boton
    const title = document.createElement('h1');
    const startButton= document.createElement('button');
   
    title.textContent = 'HerCode';
    startButton.textContent = 'Inicio'; //Agregar texto a boton
    
    startButton.addEventListener('click', ()=> {
        onNavigate('/ingreso');
    });

    div.append(title,startButton);// append()uctiliza para agregar uno o varios elementos 
    return div;

    };
   
  