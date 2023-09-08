function login (navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h1');
    const buttonReturn= document.createElement('button');
    const inpuEmail = document.createElement ('input');
    const inpuPass = document.createElement ('input');
    const buttonLogin = document.createElement ('button');

    inpuEmail.placeholder = 'Iingresa correo';
    inpuPass.placeholder  = 'Ingresa Contraseña'

    title.textContent = 'Ingresar';
    buttonLogin.textContent = 'Ingresar';


    buttonReturn.textContent='cerrar'
    buttonReturn.addEventListener('click',function(){
        navigateTo('/');
    });


    section.append(title,inpuEmail, inpuPass,buttonLogin, buttonReturn); // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
        return section;
    
        

}

export default login;