// importamos la funcion que vamos a testear
import {  entrarConGoogle } from '../src/component/login.js';



describe('entrarConGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof entrarConGoogle).toBe('function');
  });
});
