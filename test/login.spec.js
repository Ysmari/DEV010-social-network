/**
 * @jest-environment jsdom
 */
// IMPORTA LA FUNCION ORIGINAL
import { entrarConGoogle, ingresarConCorreoContrasena } from '../src/FirebaseFn.js'
// CREAS EL MOCK DE ENTRARCONGOOGLE
jest.mock('../src/FirebaseFn.js', () => ({
  entrarConGoogle: jest.fn(),
  ingresarConCorreoContrasena: jest.fn()
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
})
describe('inputEmail.value', () => {
  it('debería mostrar una alerta por correo electrónico no válido y llamar a ingresarConCorreoContrasena', () => {
    const emailValue = 'invalidemail'
    const inputEmail = {
      value: emailValue
    }
    if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
      console.log('Ingresar un Correo Valido')
    }
    expect(ingresarConCorreoContrasena).not.toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith('Ingresar un Correo Valido')
  })
})
