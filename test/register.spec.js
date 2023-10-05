/**
 * @jest-environment jsdom
 */
import register from '../src/Components/register.js'
import { registrarConCorreoContrasena } from '../src/FirebaseFn.js'
// CREAS EL MOCK DE TODAS LAS FUNCIONES AUTOMATICO SIMPLE
jest.mock('../src/FirebaseFn.js', () => ({
  registrarConCorreoContrasena: jest.fn()
}))
// TEST DE FUNCION PARA CREAR CUENTA
describe('botonRegistro', () => {
  it('deberia llamar a registroConCorreoContrasena al hacer click', () => {
    // se crea mock para simular comportamiento
    registrarConCorreoContrasena.mockResolvedValue({})
    // Crea los elementos necesarios para el test
    const component = register()
    component.querySelector('.btn-register2').click()
    // (toHaveBeenCalled) este metodose uctiliza para validar si la funcion es llamada pero no importa cuales son sus argumentos
    expect(registrarConCorreoContrasena).toHaveBeenCalled()
  })
  it('se debe indicar cuando el correo ya esta en uso', () => {
    registrarConCorreoContrasena.mockRejectedValue({ code: 'auth/invalid-email' })
    // (spyOn) metodo que me da jest que se uctiliza para espiar llamadas a una  funcion en especifica
    const alertSpy = jest.spyOn(window, 'alert')
    const component = register()
    component.querySelector('.btn-register2').click()
    // Crea una afirmacion sobre (alertSpy) y (toHaveBeenCalledWith)
    // metodo se encarga de validar si la funcion espia se llama con argumentos especificos
    expect(alertSpy).toHaveBeenCalledWith('Ingresar un Correo Valido')
  })
  it('se debe indicar que la contraseña debe tener maximo 7 caracteres', () => {
    registrarConCorreoContrasena.mockRejectedValue({ code: 'auth/email-already-in-use' })
    const alertSpy = jest.spyOn(window, 'alert') // Espía la función de alerta
    const component = register()
    component.querySelector('.btn-register2').click()
    expect(alertSpy).toHaveBeenCalledWith('La contraseña debe tener mínimo 7 caracteres')
  })
})
