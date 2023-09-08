function login(){
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
    loginBtn.classList.add('btn-ingresa')

    section.append(title, loginBtn);
    return section
}
export default login;