import { createPostProgrammingWall, exit, qFn } from '../FirebaseFn.js'
import { auth } from '../FirebaseConfig.js'
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
  divPostContent.id = 'postContent'
  // BOTON POSTEAR
  const buttonCrear = document.createElement('button')
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
  onSnapshot(qFn(), (querySnapshot) => {
    const postContent = document.getElementById('postContent')
    postContent.innerHTML = ''
    const posts = []
    querySnapshot.forEach((doc) => {
      posts.push(doc.data())
    })
    console.log('todos los posts: ', posts)
    posts.forEach((post) => {
      const sectionPost = document.createElement('section')
      const postText = document.createElement('p')
      sectionPost.append(postText)
      postContent.append(sectionPost)
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

  section.append(title, buttonReturn, textAreaPost, divPostContent, buttonCrear) // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  return section
}
export default programmingWall
