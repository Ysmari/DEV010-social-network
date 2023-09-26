import { createPostProgrammingWall } from '../FirebaseFn.js'

function programmingWall (navigateTo) {
  const section = document.createElement('section')

  const title = document.createElement('h1')
  title.textContent = 'ventana de programacion'

  const postForm = document.createElement('form')
  postForm.classList.add('postForm')

  const inputIngresopost = document.createElement('input')
  inputIngresopost.placeholder = 'Ingresa tu post'
  inputIngresopost.classList.add('inputPost')
  inputIngresopost.id = 'inputPost'

  const contenedorPost = document.createElement('div')
  contenedorPost.textContent = inputIngresopost.value

  const buttonReturn = document.createElement('button')
  buttonReturn.textContent = 'cerrar'
  buttonReturn.addEventListener('click', function () {
    navigateTo('/')
  })

  const buttonCrear = document.createElement('button')
  buttonCrear.type = 'submit'
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
        contenedorPost.appendChild(createPostElement(newPost))
      })
      .catch((error) => {
        console.error('Error al agregar el documento: ', error)
      })
  })

  function createPostElement (post) {
    const postElement = document.createElement('div')
    postElement.classList.add('post') // Agrega una clase CSS para dar estilo

    const postContent = document.createElement('p')
    postContent.textContent = post.text // Puedes personalizar esto según tu estructura de datos

    const postDate = document.createElement('p')
    postDate.textContent = post.date.toDateString() // Personaliza la presentación de la fecha

    // Agrega estos elementos al postElement
    postElement.appendChild(postContent)
    postElement.appendChild(postDate)

    return postElement
  }

  // Consulta Firestore para obtener los posts y mostrarlos en tu muro.

  section.append(title, buttonReturn, inputIngresopost, buttonCrear, postForm) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return section
}

export default programmingWall
