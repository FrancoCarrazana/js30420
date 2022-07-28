class User {
  constructor( nombreTarea, textoTarea = "sentate y relajate") {
    this.nombre = nombreTarea;
    this.texto = textoTarea;
  }
}

const usuarios = JSON.parse(localStorage.getItem('storageUsuarios')) ?? []


const formTareas = document.getElementById('idForm')
const botonUsuarios = document.getElementById('botonUsuarios')
const divUsuarios = document.getElementById('divUsuarios')

formTareas.addEventListener('submit', (e) => {
e.preventDefault();
console.log(e)
let newData = new FormData (e.target)
const tarea = new User (newData.get('nombre'), newData.get('texto'))
usuarios.push(tarea)
localStorage.setItem('storageUsuarios', JSON.stringify(usuarios))
formTareas.reset()
Toastify({
  text: "Tarea agregada",
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to top left, #217D81, #D19977)",
  },
  onClick: function(){} // Callback after click
}).showToast();
})

botonUsuarios.addEventListener('click', () => {
  let storageUsuarios = JSON.parse(localStorage.getItem('storageUsuarios'))
  divUsuarios.innerHTML = ""
  storageUsuarios.forEach((usuarios,indice) =>{
    Swal.fire({
      title: 'Usuario',
      text:'Tareas',
      html:innerHTML+= ` <div class="card border-primary mb-3 swal-fire-1" id="producto${indice}" style="max-width: 20rem;margin: 4px;">
      <div class="card-header">Header</div>
      <div class="card-body">
      <h4 class="card-title">${usuarios.nombre}</h4>
      <p class="card-text">${usuarios.texto}</p>
      <button class="btn btn-danger">Eliminar Tarea</button>
</div>
</div>`
    })
  })
  // storageUsuarios.forEach((usuarios,indice)=> {
  //   document.getElementById(`tarea${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
  //     document.getElementById(`tarea${indice}`).remove();
  //     usuarios.splice(indice, 1);
  //     localStorage.setItem('storageUsuarios', JSON.stringify(usuarios))
  //     console.log(`${tarea.nombre} eliminada`)
  //     console.log(usuarios)
  //   })
  // })
})

  