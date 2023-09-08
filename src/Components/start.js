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