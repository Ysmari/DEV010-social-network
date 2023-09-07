import { onNavigate  } from "../main.js";

export const start = () => {
    const div =document.createElement('div'); // se crea para insertar el boton
    div.classList.add('screen-start')
    const title = document.createElement('h1');
    title.classList.add('HerCode');
    const startButton= document.createElement('button');
    startButton.classList.add('btn-start');

    title.textContent = 'HerCode'; 
    
    startButton.textContent = 'Inicio'; //Agregar texto a boton
    
    startButton.addEventListener('click', ()=> {
        onNavigate('/login');
    });

    div.append(title,startButton);// append()uctiliza para agregar uno o varios elementos 
    return div;

    };
