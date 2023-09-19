
function welcome (navigateTo) {
  const sectionTwo = document.createElement('section')
  sectionTwo.classList.add('sectionTwo')
  // TITULO
  const bienvenida = document.createElement('h1')
  bienvenida.classList.add('bienvenida')
  /*const nombre = document.createElement('h2')
  nombre.textContent = localStorage.getItem('name')*/
  bienvenida.textContent = 'Bienvenida ' + localStorage.getItem('name')
  // BOTON INGRESAR
  const button = document.createElement('button')
  button.textContent = 'Ingreso'
  button.classList.add('btn-start')
  button.addEventListener('click', () => {
    navigateTo('/programmingWall')
  })



  
  
}
export default welcome;