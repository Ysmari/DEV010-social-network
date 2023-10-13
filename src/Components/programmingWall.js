import { createPostProgrammingWall, exit, deletePost, editPost, getPosts } from '../FirebaseFn.js'
import { auth, db } from '../FirebaseConfig.js'
import { doc, runTransaction } from 'firebase/firestore'
function programmingWall (navigateTo) {
  const section = document.createElement('section')
  section.classList.add('sectionPost')
  // TITULO
  const title = document.createElement('h1')
  title.textContent = 'Muro de programación'
  title.classList.add('titlePost')
  // Nuevo subtítulo
  const subtitle = document.createElement('h3')
  subtitle.textContent = 'HerCode'
  subtitle.classList.add('subtitlePost') // Puedes agregar una clase para estilizar este subtítulo
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
  // BOTON POSTEAR
  const buttonCrear = document.createElement('button')
  buttonCrear.type = 'submit'
  buttonCrear.textContent = 'Crear'
  buttonCrear.classList.add('btn-publicar')
  // BOTON CLIP (NO FUNCIONAL)
  const btnClip = document.createElement('button')
  btnClip.classList.add('btn-clip')
  btnClip.innerHTML = '<i class="fas fa-paperclip"></i>'
  buttonCrear.addEventListener('click', () => {
    console.log('text', textAreaPost.value)
    const newPost = {
      date: new Date(),
      text: textAreaPost.value,
      usersWhoLiked: [],
      likesCount: 0
    }
    createPostProgrammingWall(newPost)
      .then((docRef) => {
        textAreaPost.value = ''
      })
      .catch((error) => {
        console.error('Error al agregar el documento: ', error)
      })
  })
  getPosts((querySnapshot) => { // (querySnapshot) Es un callback que se ejecuta cada vez que se realiza un cambio
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
        usersWhoLiked: doc.data().email,
        likes: doc.data().likesCount
      }
      // console.log(objPost);
      posts.push(objPost) // agrega datos de cada documento al arreglo de post
    })
    posts.forEach((post) => {
      // console.log(post.id);
      const sectionPost = document.createElement('section') // Por cada elemento crea un nuevo elemento
      sectionPost.classList.add('contenidoPost')
      const postText = document.createElement('p')
      sectionPost.append(postText) // metodo(append()) agrega elementos al final de otro element
      // BOTON LIKE
      const btnLike = document.createElement('button')
      btnLike.classList.add('btn-like')
      btnLike.textContent = post.likes + ' Me gusta'
      btnLike.id = post.id
      btnLike.setAttribute('usuario-email', post.email)
      btnLike.setAttribute('data-likes-count', '0')

      // EVENTO DE LIKE
      // const usersWhoLiked = [] // Array para almacenar los usuarios que dieron like
      btnLike.addEventListener('click', async (e) => {
        // PARA EVITAR QUE EL BOTON SE ACTUALICE
        e.preventDefault()
        const postLikId = e.target.id
        const userEmail = auth.currentUser.email
        const postRef = doc(db, 'posts', postLikId)
        try {
          await runTransaction(db, async (transaction) => {
            const postDoc = await transaction.get(postRef)
            if (!postDoc.exists()) {
              throw new Error('El documento no existe')
            }
            const currentLikesCount = postDoc.data().likesCount
            const currentUsersWhoLiked = postDoc.data().usersWhoLiked || []
            let newLikesCount = currentLikesCount
            if (currentUsersWhoLiked.includes(userEmail)) {
              newLikesCount--
              const index = currentUsersWhoLiked.indexOf(userEmail)
              currentUsersWhoLiked.splice(index, 1)
            } else {
              newLikesCount++
              currentUsersWhoLiked.push(userEmail)
            }
            console.log(newLikesCount)
            console.log(currentUsersWhoLiked)
            transaction.update(postRef, {
              likesCount: newLikesCount,
              usersWhoLiked: currentUsersWhoLiked
            })
            // null
            // Actualiza la interfaz de usuario
            btnLike.setAttribute('data-likes-count', newLikesCount.toString())
            // nbtnLike.textContent = `${newLikesCount} Me gusta`
          })
          console.log('Se ha dado "Me gusta" a la publicación correctamente.')
        } catch (error) {
          console.error("Error al dar 'Me gusta' a la publicación:", error)
        }
      })
      // BOTTON EDITAR
      const buttonEdit = document.createElement('button')
      buttonEdit.id = post.id
      buttonEdit.textContent = 'Editar'
      buttonEdit.addEventListener('click', (e) => {
        const postEditarId = e.target.id // Obtén el ID de la publicación
        const sectionPost = e.target.parentElement
        // Traer texto original
        const textOriginal = sectionPost.querySelector('.contenidoPost p')
        if (textOriginal) {
          // Hacemos el texto original editable
          textOriginal.contentEditable = 'true'
          textOriginal.focus() // Pone el foco en el texto para que el usuario comience a editarlo directamente
          // Creamos el botón para guardar cambios
          const buttonUpdate = document.createElement('button')
          buttonUpdate.textContent = 'Guardar Cambios'
          // Agregamos el botón de guardar cambios después del texto
          sectionPost.insertBefore(buttonUpdate, textOriginal.nextSibling)
          buttonUpdate.addEventListener('click', () => {
            const updatedText = textOriginal.textContent
            const updatedData = { text: updatedText }
            editPost(postEditarId, updatedData)
              .then(() => {
              // Deshabilitamos la edición del texto original
                textOriginal.contentEditable = 'false'
                // Eliminamos el botón de guardar cambios
                buttonUpdate.remove()
                sectionPost.append(btnLike, buttonEdit, buttonDelete)
              })
          })
        }
      })
      // BOTTON DELETE
      const buttonDelete = document.createElement('button')
      buttonDelete.classList = ('btn-borrar') // Asigna un ID al botón de borrar
      buttonDelete.textContent = 'Borrar'
      buttonDelete.classList.add('buttonDelete')
      buttonDelete.addEventListener('click', (e) => { // se coloca (e) para ingresar al evento
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este post?') // Es como el aler pero ya se uctiliza es para la confirmacion
        if (confirmacion) {
          const postIdToDelete = e.target.id // Aquí ingresamos al evento.target que es donde lo encontramos en la consola
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
      postContent.append(sectionPost)
      sectionPost.append(buttonEdit, btnLike, buttonDelete)
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
  section.append(title, subtitle, buttonReturn, textAreaPost, divPostContent, buttonCrear, btnClip)
  return section
}
export default programmingWall
