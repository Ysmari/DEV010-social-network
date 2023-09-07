import { onNavigate  } from "../main.js";

export const programmingWall = () => {
    const div =document.createElement('div'); // se crea para insertar el boton
    div.classList.add('')
    const title = document.createElement('h1');
    title.classList.add('HerCode');
    const startButton= document.createElement('button');
    startButton.classList.add('btn-inicio');

    title.textContent = 'HerCode'; 
    
    startButton.textContent = 'Start'; //Agregar texto a boton
    
    startButton.addEventListener('click', ()=> {
        onNavigate('/login');
    });

    div.append(title,startButton);// append()uctiliza para agregar uno o varios elementos 
    return div;

    };
