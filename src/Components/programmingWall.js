import { createPostProgrammingWall, exit, qFn, deletePost } from '../FirebaseFn.js'
import { auth } from '../FirebaseConfig.js'
// (onSnapshot)Función de Firebase permite escuchar cambios en tiempo real de una coleccion de firebase
import { onSnapshot } from 'firebase/firestore'

function programmingWall (navigateTo) {
  const section = document.createElement('section')
  section.classList.add('sectionPost')
  // TITULO
  const title = document.createElement('h1')
  title.textContent = 'Zona de programación'
  title.classList.add('titlePost')
  // LABEL
  const labelPost = document.createElement('label')
  labelPost.textContent = 'Escribe tu pregunta de programación'
  // TEXT AREA
  const textAreaPost = document.createElement('textarea')
  textAreaPost.classList.add('textAreaPost')
  textAreaPost.rows = '10'
  textAreaPost.cols = '10'
  textAreaPost.id = 'textAreaPost'
  // DIV POST CONTENT
  const divPostContent = document.createElement('div')
  divPostContent.classList.add('divPostContent')
  divPostContent.id = 'idPostContent'

  // BOTON DELETE

  const buttonDelete = document.createElement('buttonDelete')
  buttonDelete.type = 'submit'

  // BOTON POSTEAR
  const buttonCrear = document.createElement('button')
  buttonCrear.type = 'submit'
  buttonCrear.textContent = 'Crear'
  buttonCrear.classList.add('btn-publicar')
  buttonCrear.addEventListener('click', () => {
    console.log('text', textAreaPost.value)
    const newPost = {
      date: new Date(),
      text: textAreaPost.value,
      emial: auth.currentUser.email
    }
    createPostProgrammingWall(newPost)
      .then((docRef) => {
        /* const postContent = document.getElementById('postContent')
        if (postContent) {
          const postText = document.createElement('p')
          const postDate = document.createElement('p')
          postText.textContent = newPost.text
          postDate.textContent = newPost.date
          postContent.append(postText, postDate)
        } */
        textAreaPost.value = ''
      })
      .catch((error) => {
        console.error('Error al agregar el documento: ', error)
      })
  })

  onSnapshot(qFn(), (querySnapshot) => { // (querySnapshot) Es un callback que se ejecuta cada vez que se realiza un cambio
    const postContent = document.getElementById('idPostContent')
    postContent.innerHTML = '' // limpia el contenido antes de actualizarlo
    const posts = []
    querySnapshot.forEach((doc) => { // Recorre cada documento en el objecto querySnapshot
      posts.push(doc.data()) // agrega datos de cada documento al arreglo de post
    })
    console.log('todos los posts: ', posts)

    posts.forEach((post) => {
      const sectionPost = document.createElement('section') // Por cada elemento crea un nuevo elemento
      sectionPost.classList.add('contenidoPost')
      const postText = document.createElement('p')
      sectionPost.append(postText) // metodo(append()) agrega elementos al final de otro elemento

      // BOTTON DELETE
      const buttonDelete = document.createElement('button')
      buttonDelete.textContent = 'Borrar'
      buttonDelete.addEventListener('click', async () => {
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este post?')
        if (confirmacion) {
          const postIdToDelete = 'posts' // Aquí usamos el ID "posts"
          await deletePost(postIdToDelete)
            .then(() => {
              sectionPost.remove()
              console.log('Post eliminado con éxito')
            })
            .catch((error) => {
              console.error('Error al eliminar el post:', error)
            })
        }
      })
      postContent.append(sectionPost)
      sectionPost.appendChild(buttonDelete)
      postText.textContent = post.text
    })
  })

  // BOTON CERRAR
  const buttonReturn = document.createElement('button')
  buttonReturn.textContent = 'cerrar'
  buttonReturn.classList.add('btn-cerrar')
  buttonReturn.addEventListener('click', function () {
    exit()
  })

  // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  section.append(title, buttonReturn, textAreaPost, divPostContent, buttonCrear, buttonDelete)
  return section
}

export default programmingWall
