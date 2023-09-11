function programmingWall ( navigateTo) { 
    const section = document.createElement('section');
    const title = document.createElement('h1');
    const button = document.createElement('button');


    button.textContent='cerrar'
    button.addEventListener('click',()=>{
        navigateTo('/login');
    });
    title.textContent = 'ventana de programacion';
    section.append(title,button); // append agrega nuevo elemento al contenedor en este caso agrega tittle a section que es el principal
        return section;

}

export default programmingWall;