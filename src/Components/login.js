import { entrarConGoogle } from "../FirebaseFn";
function login(navigateTo){
    //SECCION
    const section = document.createElement('section');
    section.classList.add('section-login')
    //TITULO HERCODE
    const title =  document.createElement('h2');
    title.textContent = 'HerCode';
    title.classList.add('title-login')
    //BOTON INGRESA
    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Ingresa';
    loginBtn.classList.add('btn-ingresa');
    //BOTON GOOGLE
    const buttonGoogle = document.createElement('button');
    buttonGoogle.textContent = 'ingreso con Google';
    buttonGoogle.classList.add('btn-google')
    buttonGoogle.addEventListener('click', function(){
        entrarConGoogle()
        .then((user)=>{
            navigateTo('/programmingWall')
        }).catch((error)=>{
            alert('revisa tus datos')
        })
    })
    //EMAIL Y CONTRASEÑA
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    inputEmail.placeholder = 'ingresa correo';
    inputPass.placeholder = 'ingresa contraseña';

    section.append(title, loginBtn, inputEmail, inputPass, buttonGoogle);
    return section
}
export default login; 