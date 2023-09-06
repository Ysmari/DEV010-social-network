// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from './FirebaseConfig';
import {inicio} from './Componentes/inicio.js';
import {ingreso} from './Componentes/ingreso.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{auth}
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