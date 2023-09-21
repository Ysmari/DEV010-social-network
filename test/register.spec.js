/**
 * @jest-environment jsdom
 */
// IMPORTA LA FUNCION ORIGINAL
import { registroConCorreoContrasena } from '../src/FirebaseFn.js'
// CREAS EL MOCK
jest.mock('../src/FirebaseFn.js', () => ({
  registroConCorreoContrasena: jest.fn()
}))
describe('ingresarConBotonCorreoContrasena', () => {
  it('debería ingresar con correo y contraseña', () => {
    registroConCorreoContrasena()
    expect(registroConCorreoContrasena).toHaveBeenCalled()
  })
})
describe('ingresarConCorreoValido', () => {
  it('debería ingresar con correo un correo que contenga @ && .', () => {
    // Crear los elementos necesarios para el test
    const emailInvalido = 'correoinvalido'
    if (!emailInvalido.includes('@' && '.')) {
      alert('Ingresar un Correo Valido')
    }
    expect('register').toHaveBeenCalledWith('Ingresar un Correo Valido')
  })
})
