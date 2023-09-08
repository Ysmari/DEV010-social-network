// Este es el punto de entrada de tu aplicacion

import{start} from "./Components/start.js";
import {login} from "./Components/login1.js";
import {programmingWall} from "./Components/programmingWall.js"



const root = document.getElementById('root');

const routes = {
    '/': start,
    '/login': login,
    '/programmingWall': programmingWall,
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