function programmingWall (navigateTo) {
  const sectionPost = document.createElement('section')
  sectionPost.classList.add('sectionPost')
  // TITULO
  const titlePost = document.createElement('h1')
  titlePost.textContent = 'Zona de Programación'
  titlePost.classList.add('titlePost')
  // FORMULARIO PARA POST
  const formPost = document.createElement('form')
  formPost.method = 'POST'
  formPost.classList.add('form-post')
  const label = document.createElement('label')
  label.textContent = 'Escribe tu pregunta de programación'
  // BOTON PUBLICAR
  const botonPublicar = document.createElement('button')
  botonPublicar.textContent = '¡Publicar!'
  botonPublicar.classList.add('btn-publicar')
  botonPublicar.addEventListener('click', () => {
    const newPost = {
      date: new Date()
    }
  })
  // BOTON PARA VOLVER A LA VISTA LOGIN
  const button = document.createElement('button')
  button.textContent = 'cerrar'
  button.addEventListener('click', () => {
    navigateTo('/login')
  })
  // BOTON VOLVER A LA VISTA: INICIAR
  const buttonReturn = document.createElement('button')
  buttonReturn.textContent = 'Inicio'
  buttonReturn.addEventListener('click', function () {
    navigateTo('/')
  })
  sectionPost.append(titlePost, formPost, botonPublicar, button, buttonReturn) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return sectionPost
}

export default programmingWall
