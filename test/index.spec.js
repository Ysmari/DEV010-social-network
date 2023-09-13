
import {login} from '../src/Components/login.js'


describe('Existe el boton de ingreso a Google',()=>{
    const elemento = login ();
    const btnGoogle = elemento.querySelector('.btn-google');
    expect(btnGoogle).not.toBeNull();
   }); 

   