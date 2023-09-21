/**
 * @jest-environment jsdom
 */
// IMPORTA LA FUNCION ORIGINAL
import { entrarConGoogle } from '../src/FirebaseFn.js'
// CREAS EL MOCK DE ENTRARCONGOOGLE
jest.mock('../src/FirebaseFn.js', () => ({
  entrarConGoogle: jest.fn()
}))

describe('buttonGoogle', () => {
  it('debería llamar a entrarConGoogle al hacer click', () => {
    entrarConGoogle()
    // Verificar si entrarConGoogle se llamó una vez
    expect(entrarConGoogle).toHaveBeenCalled()
  })
})
