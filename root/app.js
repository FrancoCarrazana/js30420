class User {
  constructor( nombreTarea, textoTarea = "sentate y relajate") {
    this.nombre = nombreTarea;
    this.texto = textoTarea;
  }
}

let tareas = []

if (localStorage.getItem('storageUsuarios')){
 tareas = JSON.parse(localStorage.getItem('storageUsuarios'))
} else {
  localStorage.setItem('storageUsuarios', JSON.stringify(tareas));
}

if (localStorage.getItem('storageUsuarios')){
  tareas = JSON.parse(localStorage.getItem('storageUsuarios'))
 } else {
   localStorage.setItem('storageUsuarios', JSON.stringify(tareas));
 }

const formTareas = document.getElementById('idForm')
const botonUsuarios = document.getElementById('botonUsuarios')
const divUsuarios = document.getElementById('divUsuarios')

formTareas.addEventListener('submit', (e) => {
e.preventDefault();
console.log(e)
let newData = new FormData (e.target)
const tarea = new User (newData.get('nombre'), newData.get('texto'))
tareas.push(tarea)
localStorage.setItem('storageUsuarios', JSON.stringify(tareas))
formTareas.reset()
})

botonUsuarios.addEventListener('click', () => {
  let storageUsuarios = JSON.parse(localStorage.getItem('storageUsuarios'))
  divUsuarios.innerHTML = ""
  storageUsuarios.forEach((tarea,indice) =>{
    divUsuarios.innerHTML += `
    <div class="card border-dark mb-3" id="tarea${indice}" style="max-width: 20rem;">
  <div class="card-header">Tarea</div>
  <div class="card-body">
    <h4 class="card-title">${tarea.nombre}</h4>
    <p class="card-text">${tarea.texto}</p>
    <button class="btn btn-danger">Eliminar Tarea</button>
  </div>
</div>
    `
  })
  storageUsuarios.forEach((tarea,indice)=> {
    document.getElementById(`tarea${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
      document.getElementById(`tarea${indice}`).remove();
      tareas.splice(indice, 1);
      localStorage.setItem('storageUsuarios', JSON.stringify(tareas))
      console.log(`${tarea.nombre} eliminada`)
      console.log(tareas)
    })
  })
})