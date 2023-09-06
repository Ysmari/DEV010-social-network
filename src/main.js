// Este es el punto de entrada de tu aplicacion
import{inicio} from "./Componentes/inicio.js";
import {ingreso} from "./Componentes/ingreso.js";

const root = document.getElementById('root');

const routes = {
    '/': inicio, //Clave : Ruta 
    '/ingreso':ingreso,
};

export const onNavigate = (pathname) => { // se uctiliza para cambiar la ruta y actualizar el contenido de la pagina sin recargarla por completo
    window.history.pushState( // cambia la url y simula la navegacion de una nueva ruta tiene 3 argumentos 
        {},
        pathname, // nueva ruta que se mostrara
        window.location.origin + pathname, //  ruta completa 
     );
     root.removeChild(root.firstElementChild); // Remueve la informacion anterior
     root.appendChild(routes[pathname]()); // Tambien podemos uctilizar innerHTML // trae la informacion nueva 
     };

const component = routes [window.location.pathname]; //ruta este ingresando por medio de windowlocation 

window.onpopstate = () => {  // se uctiliza para retornar desde la flichita
    root.removeChild(root.firstElementChild);
    root.append(component());

};

root.appendChild(component());//appendChild agrega un elemento como hijo de otro elemento ( root a componet) 
