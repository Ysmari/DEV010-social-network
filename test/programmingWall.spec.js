/**
 * @jest-environment jsdom
 */
import programmingWall from '../src/Components/programmingWall.js'
import { createPostProgrammingWall, getPosts } from '../src/FirebaseFn.js'
jest.mock('../src/FirebaseFn.js', () => ({
  getPosts: jest.fn(),
  createPostProgrammingWall: jest.fn(),
  btnLike: jest.fn()

})
)

describe('creacionDePost', () => {
  it('deberia crear un post al momento de darle click', () => {
    createPostProgrammingWall.mockResolvedValue({})
    // Crea los elementos necesarios para el test
    const component = programmingWall()
    const textAreaPost = component.querySelector('.textAreaPost')
    component.querySelector('.btn-publicar').click()
    expect(createPostProgrammingWall).toHaveBeenCalled()
    expect(textAreaPost.value).toBe('')
  })
})
describe('mostrarPosts', () => {
  it('debería obtener los post de una base de datos y uctiliza un callback para ejecutarlos', async () => {
    const divPostContent = document.createElement('div')
    divPostContent.classList.add('divPostContent')
    divPostContent.id = 'idPostContent'
    document.body.appendChild(divPostContent)
    const querySnapshotData = [
      {
        id: '1',
        data: () => ({
          email: 'usuario1@example.com',
          date: '2023-10-10',
          text: 'Este es un post de prueba',
          likesCount: 5
        })
      }
    ]
    getPosts.mockImplementation((callback) => {
      const querySnapshot = {
        forEach: (fn) => querySnapshotData.forEach((data) => fn(data))
      }
      callback(querySnapshot)
    })
    const component = programmingWall()
    // Espera a que se resuelva la promesa
    await Promise.resolve()
    // Asegúrate de que la publicación de prueba esté presente en el componente
    const postContent = component.querySelector('.divPostContent')
    expect(postContent.innerHTML).toContain('Este es un post de prueba')
  })
  describe('botonLike', () => {
    it('debería agregar un "Me gusta" cuando el usuario hace clic en el botón', async () => {
      const component = programmingWall()
      const btnLike = component.querySelector('.btn-like')

      const initialLikesCount = parseInt(btnLike.getAttribute('data-likes-count'))
      btnLike.click()

      // Espera a que se resuelva la promesa
      await new Promise((resolve) => setTimeout(resolve, 0))

      // Obtiene el nuevo contador de "Me gusta" después del clic
      const updatedLikesCount = parseInt(btnLike.getAttribute('data-likes-count'))

      // Realiza la aserción directamente
      expect(updatedLikesCount).toBe(initialLikesCount + 1)
    })
  })
})
