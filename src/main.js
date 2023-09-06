// Este es el punto de entrada de tu aplicacion

import{inicio} from "./Componentes/inicio.js";
import {ingreso} from "./Componentes/ingreso.js";



const root = document.getElementById('root');

const routes = {
    '/': inicio,
    '/ingreso': ingreso,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
    root.removeChild(root.firstElementChild);
    root.appendChild(routes[pathname]());
};
const component =routes [window.location.pathname];

window.onpopstate = () => {
    root.removeChild(root.firstElementChild);
    root.append(component());
};

root.appendChild(component());