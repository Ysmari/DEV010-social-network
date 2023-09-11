
import start from "./Components/start.js";
import login from "./Components/login.js";
import error from "./Components/error.js";
import programmingWall from "./Components/programmingWall.js";

const root = document.getElementById('root') //VARIABLE QUE ACCEDE AL DOM 

const routes = [
    {path:'/', component: start},
    {path:'/login', component: login},
    {path:'/error', component: error},
    {path:'/programmingWall', component: programmingWall},
];
const defaultRoute = '/';

function navigateTo(hash){
    const route = routes.find((routeFind) => routeFind.path === hash);//RETORNAMOS EL RESULTADO DE HABER ENCONTRADO LA RUTA EN EL ARREGLO ROUTES  
//QUE PASA SI SI HAY UNA RUTA?
    if(route && route.component){   
        window.history.pushState(
            {}, 
            route.path,
            window.location.origin + route.path,
        );
        if(root.firstChild){
            root.removeChild(root.firstChild);
        }
        root.appendChild(route.component(navigateTo))
    } else {
        navigateTo('/error')

    }
}
window.onpopstate=()=>{
    navigateTo(window.location.pathname);
}
navigateTo(window.location.pathname || defaultRoute)
