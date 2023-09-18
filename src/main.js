import start from './Components/start.js'
import login from './Components/login.js'
import error from './Components/error.js'
import programmingWall from './Components/programmingWall.js'
import register from './Components/register.js'

const root = document.getElementById('root') // esta variable entra al DOM

const routes = [
  { path: '/', component: start }, // se uctiliza para trabajar con rutas
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/register', component: register },
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

navigateTo(window.location.pathname || defaultRoute)
