import start from './Components/start.js'
import login from './Components/login.js'
import error from './Components/error.js'
import programmingWall from './Components/programmingWall.js'
import register from './Components/register.js'
import welcome from './Components/welcome.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const root = document.getElementById('root') // esta variable entra al DOM

const routes = [
  { path: '/', component: start }, // se uctiliza para trabajar con rutas
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/register', component: register },
  { path: '/welcome', component: welcome },
  { path: '/programmingWall', component: programmingWall }
]

const defaultRoute = '/'

function navigateTo (hash) {
  const route = routes.find((routeFind) => routeFind.path === hash)

  if (route && route.component) {
    window.history.pushState( // history.pushState anexa un registro al historial del navegador
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

window.onpopstate = () => { // onpopstate se uctiliza para controlar la navegacion del usurio entre ventanas
  navigateTo(window.location.pathname)
}

navigateTo(window.location.pathname || defaultRoute) // (window.location.pathnam) devuleve la ruta de la url
onAuthStateChanged(getAuth(), (user) => { // (onAuthStateChanged)es una funcion que hace parte de  Firebase Authentication y se utiliza para detectar cambios en el estado de autenticación del usuario
  console.log(user)
  if (user) {
    navigateTo('/programmingWall')
  } else {
    navigateTo('/')
  }
})
