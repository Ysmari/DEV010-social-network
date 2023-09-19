import register from './register.js'
function welcome () {
  const sectionTwo = document.createElement('section')
  sectionTwo.classList.add('sectionTwo')
  // TITULO
  const bienvenida = document.createElement('h1')
  bienvenida.textContent = 'Bienvenida'

  /*const nombre = document.createElement('h2')
  nombre.textContent = register.getElementById('inputNombre')*/

  sectionTwo.append(bienvenida)
  return sectionTwo;
}

export default welcome;