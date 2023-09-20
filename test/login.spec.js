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
    // Crear los elementos necesarios para el test
    const button = document.createElement('button')
    button.addEventListener('click', entrarConGoogle)
    // Realizar el clic en el botón
    button.click()
    // Verificar si entrarConGoogle se llamó una vez
    expect(entrarConGoogle).toHaveBeenCalled()
  })
<<<<<<< HEAD
})
=======
})
>>>>>>> 926cc6d6231a1a8871df3f3dda23e70e3c98813f
