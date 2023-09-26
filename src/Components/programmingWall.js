import { createPostProgrammingWall } from '../FirebaseFn.js'

function programmingWall (navigateTo) {
  const section = document.createElement('section')

  const title = document.createElement('h1')
  title.textContent = 'ventana de programacion'

  const inputIngresopost = document.createElement('input')
  inputIngresopost.placeholder = 'Ingresa tu post'
  inputIngresopost.classList.add('inputPost')
  inputIngresopost.id = 'inputPost'

  const buttonReturn = document.createElement('button')
  buttonReturn.textContent = 'cerrar'
  buttonReturn.addEventListener('click', function () {
    navigateTo('/')
  })

  const buttonCrear = document.createElement('button')
  buttonCrear.textContent = 'Crear'
  buttonCrear.addEventListener('click', () => {
    console.log('text', inputIngresopost.value)
    const newPost = {
      date: new Date(),
      text: inputIngresopost.value
    }
    createPostProgrammingWall(newPost)
      .then((docRef) => {
        console.log('Documento agregado con ID: ', docRef.id)
      })
      .catch((error) => {
        console.error('Error al agregar el documento: ', error)
      })
  })

  section.append(title, buttonReturn, inputIngresopost, buttonCrear) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return section
}
export default programmingWall
