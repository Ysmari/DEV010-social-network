import start from './Components/start.js'
import login from './Components/login.js'
import error from './Components/error.js'
import programmingWall from './Components/programmingWall.js'
import register from './Components/register.js'
import welcome from './Components/welcome.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const root = document.getElementById('root') // Creamos una variable root que hace referencia al elemento con el id "root" en el DOM, donde se mostrarán los componentes.
const routes = [ // Definimos un arreglo llamado routes que contiene objetos que representan cada ruta de la aplicación y el componente asociado a esa ruta.
  { path: '/', component: start }, 
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/register', component: register },
  { path: '/welcome', component: welcome },
  { path: '/programmingWall', component: programmingWall }
]
const defaultRoute = '/' // La variable defaultRoute contiene la ruta predeterminada, que en este caso es "/".
function navigateTo (hash) { // La función navigateTo se utiliza para cambiar la ruta y mostrar el componente correspondiente en el DOM.
  const route = routes.find((routeFind) => routeFind.path === hash) 
  if (route && route.component) {
    window.history.pushState( // Utiliza window.history.pushState para actualizar la URL en el navegador sin recargar la página
      {}, route.path,
      window.location.origin + route.path
    )
    if (root.firstChild) { // si hay un primer elemento
      root.removeChild(root.firstChild)
    }
    root.appendChild(route.component(navigateTo))
  } else {
    navigateTo('/error') // se invoca nuevamente navigate pero esta vez como el error
  }
}
window.onpopstate = () => { // El evento onpopstate se dispara cuando el usuario navega hacia atrás o hacia adelante en el historial del navegador.
  navigateTo(window.location.pathname) // En este caso, se utiliza para llamar a la función navigateTo y mostrar el componente correspondiente según la ruta actual.
}

navigateTo(window.location.pathname || defaultRoute) //Llamamos a la función navigateTo con la ruta actual o la ruta predeterminada.
onAuthStateChanged(getAuth(), (user) => { // Utilizamos onAuthStateChanged de Firebase para detectar cambios en el estado de autenticación.
  console.log(user)
  if (user) {
    navigateTo('/programmingWall')  //Si hay un usuario autenticado, navegamos a la ruta "/programmingWall".
  } else {
    navigateTo('/') // Si no hay un usuario autenticado, navegamos a la ruta principal ("/").
  }
}) 

