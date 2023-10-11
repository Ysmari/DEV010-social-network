/**
 * @jest-environment jsdom
 */
import programmingWall from '../src/Components/programmingWall.js'
import { createPostProgrammingWall } from '../src/FirebaseFn.js'
jest.mock('../src/FirebaseFn.js', () => ({
  deletePost: jest.fn(),
  getPosts: jest.fn(),
  createPostProgrammingWall: jest.fn()
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
it('deberia llamar a createPostProgrammingWall con datos correctos', () => {
  createPostProgrammingWall.mockResolvedValue({})
  const component = programmingWall()
  const textAreaPost = component.querySelector('.textAreaPost')
  textAreaPost.value = 'Mi nuevo post'
  component.querySelector('.btn-publicar').click()
  expect(createPostProgrammingWall).toHaveBeenCalledWith({
    date: expect.any(Date),
    text: 'Mi nuevo post',
    usersWhoLiked: [],
    likesCount: 0
  })
})
describe('Error en creación de post', () => {
  it('debería mostrar un mensaje de error en consola si falla la creación del post', () => {
    // 1. Configurar createPostProgrammingWall para que rechace la promesa.
    const mockError = new Error('Error de prueba')
    createPostProgrammingWall.mockRejectedValue(mockError)
    // 2. Espiar console.error.
    const consoleSpy = jest.spyOn(console, 'error')
    consoleSpy.mockImplementation(() => {})
    // 3. Llamar a tu función.
    const component = programmingWall()
    const textAreaPost = component.querySelector('.textAreaPost')
    textAreaPost.value = 'Prueba de error'
    component.querySelector('.btn-publicar').click()
    // 4. Verificar que console.error fue llamado con el mensaje de error correcto.
    expect(consoleSpy).toHaveBeenCalledWith('Error al agregar el documento: ', mockError)
    // Limpiar el espía.
    consoleSpy.mockRestore()
  })
})
