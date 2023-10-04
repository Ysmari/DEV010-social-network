import { createPostProgrammingWall, exit, qFn, deletePost } from '../FirebaseFn.js'   // editPost
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
      email: auth.currentUser.email,
      likes: [/* arreglo que inicializa vacio para guardar ahi el uid de las personas que le den like -uid */]
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
        emial: doc.data().emial,
        date: doc.data().date,
        text: doc.data().text
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

      // BOTTON DELETE
      const buttonDelete = document.createElement('button')
      buttonDelete.id = post.id
      buttonDelete.textContent = 'Borrar'
      buttonDelete.addEventListener('click', (e) => {
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este post?')
        if (confirmacion) {
          const postIdToDelete = e.target.id // Aquí usamos el ID "posts"
          console.log(e.target.id)
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
      sectionPost.appendChild(buttonDelete)
      postText.textContent = post.text
    })
  })

  //BOTON EDITAR 
 /*const buttonEdit = document.createElement('button')
buttonEdit.id = post.id
buttonEdit.textContent = 'Editar'

buttonEdit.addEventListener('click', (e) => {
  const postIdToEdit = e.target.id
  console.log(e.target.id)

   
  const newText = prompt('Ingrese el nuevo contenido del post:') // prompt para obtener el nuevo contenido de la publicación del usuario
  if (newText) {
    editPost(postIdToEdit, newText)
      .then(() => {
        const contenidoPost = document.getElementById(e.target.id) // Reemplaza 'contenidoPost' con el ID correcto del elemento que deseas actualizar
        if (contenidoPost) {
          contenidoPost.textContent = newText;
          console.log('Post editado con éxito')
        } else {
          console.error('El elemento con el ID especificado no existe.');
        
        }
      })
      .catch((error) => {
        console.error('Error al editar el post:', error)
      })
  }
}) */
      
// BOTON CERRAR
  const buttonReturn = document.createElement('button')
  buttonReturn.textContent = 'cerrar'
  buttonReturn.classList.add('btn-cerrar')
  buttonReturn.addEventListener('click', function () {
    exit()
  })


  // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
  section.append(title, buttonReturn, textAreaPost, divPostContent, buttonCrear, buttonDelete )  // buttonEdit
  return section
}
export default programmingWall 