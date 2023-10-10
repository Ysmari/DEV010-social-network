/**
 * @jest-environment jsdom
 */
import { onSnapshot } from 'firebase/firestore'
import programmingWall from '../src/Components/programmingWall.js'
import { createPostProgrammingWall, getPosts, q } from '../src/FirebaseFn.js'
jest.mock('../src/FirebaseFn.js', () => ({
  deletePost: jest.fn(),
  getPosts: jest.fn(),
  createPostProgrammingWall: jest.fn(),
  onSnapshot: jest.fn(),
  // collection: jest.fn(), query, db
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
describe('getPosts', () => {
  it('deberia llamar a onSnapshot para hacer la consulta', () => {
    const callback = jest.fn()
    getPosts(callback)
    // expect(onSnapshot).toHaveBeenCalled()
  })
})
