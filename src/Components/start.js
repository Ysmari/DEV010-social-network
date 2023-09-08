import { onNavigate  } from "../main.js";

export const start = () => {
    const div =document.createElement('div');
    div.classList.add('screen-start')
    const title = document.createElement('h1');
    title.textContent = 'HerCode';
    title.classList.add('HerCode');
    //BOTON START
    const startButton= document.createElement('button');
    startButton.classList.add('btn-start'); 
    startButton.textContent = 'Inicio'; //Agregar texto a boton
    
    startButton.addEventListener('click', ()=> {
        onNavigate('/login');
    });

    div.append(title,startButton);// append()uctiliza para agregar uno o varios elementos 
    return div;

    };
