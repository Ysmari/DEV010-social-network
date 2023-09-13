/**
 * @jest-environment jsdom
 */

import { entrarConGoogle } from '../src/FirebaseFn.js'


describe('buttonGoogle', () => {
  it('debería llamar a entrarConGoogle al hacer click', () => {
    // Crear los elementos necesarios para el test
    const button = document.createElement('button')
    button.addEventListener('click', entrarConGoogle)
    // Crear un mock de la funcion entrarConGoogle
    jest.mock('../src/__mocks__/login.js')
    const mockEntrarConGoogle = jest.fn()
    // Asignar el mock como implementación de la función original
    entrarConGoogle.mockImplementation(mockEntrarConGoogle)
    // Simular un evento de click en el boton
    button.click()
    // Verificar si la función entrarConGoogle fue llamada correctamente
    expect(mockEntrarConGoogle).toHaveBeenCalled()
  })
})
