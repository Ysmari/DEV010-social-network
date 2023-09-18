import register from "./register";

function welcome () {
  const sectionOne = document.createElement('section')
  sectionOne.classList.add('sectionOne')
  // TITULO
  const title = document.createElement('h1')
  title.textContent = 'HerCode'
  title.classList.add('HerCode2')


  const nombre = document.getElementById("inputnombre").value;
  const saludo = "bienvenido" + nombre;
  document.getElementById("bienvenido").textContent =saludo;
  
  
}
export default welcome