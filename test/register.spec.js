/**
 * @jest-environment jsdom
 */
import register from '../src/Components/register.js'
import { registrarConCorreoContrasena } from '../src/FirebaseFn.js'
// CREAS EL MOCK DE TODAS LAS FUNCIONES
jest.mock('../src/FirebaseFn.js', () => ({
  registrarConCorreoContrasena: jest.fn()
}))
// TEST DE FUNCION PARA CREAR CUENTA
describe('botonRegistro', () => {
  it('deberia llamar a registroConCorreoContrasena al hacer click', () => {
    registrarConCorreoContrasena.mockResolvedValue({})
    // Crea los elementos necesarios para el test
    const component = register()
    component.querySelector('.btn-register2').click()
    expect(registrarConCorreoContrasena).toHaveBeenCalled()
  })
})
describe('botonRegistro - Caso de promesa rechazada', () => {
  it('deberia llamar a registroConCorreoContrasena al hacer click', () => {
    registrarConCorreoContrasena.mockRejectedValue(new Error('Error en la promesa')) // Simula el rechazo de la promesa con un mensaje de error
    // Crea los elementos necesarios para el test
    const component = register()
    component.querySelector('.btn-register2').click()
    expect(registrarConCorreoContrasena).not.toHaveBeenCalled()()
  })
})
