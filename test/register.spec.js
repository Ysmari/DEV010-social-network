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
describe('Pruebas del componente Register', () => {
  beforeEach(() => {
    registrarConCorreoContrasena.mockReset()
  })

  it('llama a registrarConCorreoContrasena cuando se hace clic en el botón', () => {
    // Configurar el mock para devolver una promesa resuelta
    registrarConCorreoContrasena.mockResolvedValue({})

    // Obtener el componente de registro
    const component = register()

    // Obtener el botón de registro
    const botonRegistro = component.querySelector('.btn-register2')

    // Simular un clic en el botón de registro
    botonRegistro.click()

    // Verificar si la función mock fue llamada
    expect(registrarConCorreoContrasena).toHaveBeenCalled()
  })
})
