function start ( navigateTo) { 
    const sectionOne = document.createElement('section');
    
    sectionOne.classList.add('sectionOne')
    const title = document.createElement('h1');
    title.classList.add('HerCode')
    const button = document.createElement('button');


    button.textContent='Ingreso'
    button.classList.add('btn-start');
    button.addEventListener('click',()=>{
        navigateTo('/login');
    });
    title.textContent = 'HerCode';
    sectionOne.append(title,button); // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
        return sectionOne;

}

export default start;
   

