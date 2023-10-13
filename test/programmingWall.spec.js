/**
 * @jest-environment jsdom
 */
import programmingWall from '../src/Components/programmingWall.js'
import { createPostProgrammingWall, getPosts } from '../src/FirebaseFn.js'
jest.mock('../src/FirebaseFn.js', () => ({
  deletePost: jest.fn(),
  getPosts: jest.fn(),
  createPostProgrammingWall: jest.fn(),
  onSnapshot: jest.fn()
})
)
describe('funcionalidad de creacion de Post', () => {
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
describe('programmingWall', () => {
  it('debería obtener los post de una base de datos y uctiliza un callback para ejecutarlos', async () => {
    const divPostContent = document.createElement('div')
    divPostContent.classList.add('divPostContent')
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
    const mockGetPosts = jest.fn()
    mockGetPosts.mockImplementation((callback) => {
      const querySnapshot = {
        forEach: (fn) => querySnapshotData.forEach((data) => fn(data))
      }
      callback(querySnapshot)
    })
    getPosts.mockImplementation(mockGetPosts)
    // Realiza la prueba llamando a la función programmingWall
    const component = programmingWall()
    // Espera a que se resuelva la promesa
    await Promise.resolve()
    // Asegúrate de que la publicación de prueba esté presente en el componente
    const postContent = component.querySelector('.divPostContent')
    expect(postContent.innerHTML).toContain('Este es un post de prueba')
  })
})
