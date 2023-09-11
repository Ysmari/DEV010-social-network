
function start(navigateTo){
    //SECCION
    const section = document.createElement('section');
    section.classList.add('section-start')
    //TITULO HERCODE
    const title =  document.createElement('h2');
    title.textContent = 'HerCode';
    title.classList.add('title-start')
    //BOTON INGRESA
    const startBtn = document.createElement('button');
    startBtn.textContent = 'Inicio ';
    startBtn.classList.add('btn-inicio')
    startBtn.addEventListener('click', function(){
        navigateTo('/login');
    })
    section.append(title, startBtn);
    return section
}
export default start;

    const title = document.createElement('h1');
    title.classList.add('HerCode');
    //BOTON INGRESAR 
    const button = document.createElement('button');
    button.textContent='Ingreso';
    button.classList.add('btn-start');
    button.addEventListener('click',()=>{
        navigateTo('/login');
    });
    title.textContent = 'HerCode';
    sectionOne.append(title, button); // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
        return sectionOne;

}

export default start;

