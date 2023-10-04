import { createPostProgrammingWall, exit, qFn, deletePost, updateLike } from '../FirebaseFn.js'
import { auth, arrayUnion, arrayRemove, db } from '../FirebaseConfig.js'
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
      email: auth.currentUser.email,
      likesCount: []
    }
    createPostProgrammingWall(newPost)
      .then((docRef) => {
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
      // console.log(doc.id, doc.data());
      const objPost = {
        id: doc.id,
        email: doc.data().email,
        date: doc.data().date,
        text: doc.data().text,
        likesCount: doc.data().likesCount
      }
      //  console.log(objPost);
      posts.push(objPost) // agrega datos de cada documento al arreglo de post
    })
    console.log('todos los posts: ', posts)

    posts.forEach((post) => {
      // console.log(post.id);
      const sectionPost = document.createElement('section') // Por cada elemento crea un nuevo elemento
      sectionPost.classList.add('contenidoPost')
      const postText = document.createElement('p')
      sectionPost.append(postText) // metodo(append()) agrega elementos al final de otro element
      // BOTON LIKE
      const btnLike = document.createElement('button')
      btnLike.textContent = 'Me gusta'
      btnLike.classList.add('btn-like')
      btnLike.id = post.id
      btnLike.setAttribute('usuario-email', post.email)
      btnLike.setAttribute('data-likes-count', 0)
      // EVENTO DE LIKE
      const likesCount = [] // Array para almacenar email de los usuarios que dieron like
      btnLike.addEventListener('click',(e) => {
        const postId = post.id
        const userEmail = btnLike.getAttribute('usuario-email')
        const currentLikesCount = parseInt(btnLike.getAttribute('data-likes-count'))
        const userAlreadyLikesThis = likesCount.includes(userEmail)
        if (!userAlreadyLikesThis) {
          try {
            updateLike(db, 'posts', postId, {
              likesCount: arrayUnion(userEmail)
            })
            console.log('Like agregado exitosamente')
            btnLike.setAttribute('data-likes-count', (currentLikesCount + 1).toString())
            btnLike.textContent = `${currentLikesCount + 1} Me gusta`
            likesCount.push(userEmail)
          } catch (error) {
            console.error('Error al guardar el like:', error)
          }
        } else {
          try {
            updateLike(db, 'posts', postId, {
              likesCount: arrayRemove(userEmail)
            })
            console.log('Like eliminado exitosamente')
            btnLike.setAttribute('data-likes-count', (currentLikesCount - 1).toString())
            btnLike.textContent = `${currentLikesCount - 1} Me gusta`
            const index = likesCount.indexOf(userEmail)
            likesCount.splice(index, 1)
          } catch (error) {
            console.error('Error al borrar el like:', error)
          }
        }
        console.log('ID del post:', postId)
        console.log('Email del usuario:', userEmail)
        console.log('Número de likes:', currentLikesCount)
      })
      // BOTTON DELETE
      const buttonDelete = document.createElement('button')
      buttonDelete.id = post.id
      buttonDelete.textContent = 'Borrar'
      buttonDelete.addEventListener('click', (e) => {
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este post?')
        if (confirmacion) {
          const postIdToDelete = e.target.id // Aquí usamos el ID "posts"
          console.log(e.target.id)
          console.log(e)
          deletePost(postIdToDelete)
            .then(() => {
              sectionPost.remove()
              console.log('Post eliminado con éxito')
            })
            .catch((error) => {
              console.error('Error al eliminar el post:', error)
            })
        }
      })
      postContent.append(sectionPost, btnLike)
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
