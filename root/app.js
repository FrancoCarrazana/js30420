class user {
  constructor(nombre, rol, tareas = "sentate y relajate") {
    this.nombre = nombre;
    this.rol = rol;
    this.tareas = tareas;
  }
}

// const usuario1 = new user("Franco Carrazana", "Empleado", 1, "VALIACION");
// const usuario2 = new user("David Pereyra", "Empleado", 2, "PEDIDOS");
// const usuario3 = new user("Federico Celis", "Empleado", 3, "ATENCION");
// const usuario4 = new user("Cristian Bianco", "jefe", 4);
// const miembros = [usuario1, usuario2, usuario3, usuario4];

function usuarios() {
  const recibirId = document.getElementById('idForm');
  const divUsuarios = document.getElementById('divUsuarios')
  const algo = []

 recibirId.addEventListener('submit', (e) => {
      e.preventDefault();
     let nombre = document.getElementById('nombrePersonal').value
     let rol = document.getElementById('rolPersonal').value
     let tareas = document.getElementById('tareasPersonal').value
     const sendId = new user(nombre, rol ,tareas);
    
     algo.push(sendId);
     console.log(algo);
     recibirId.reset();
     });
 
  document.getElementById('botonUsuarios').addEventListener('click', () =>{
    algo.forEach(algo => {
      divUsuarios.innerHTML += `
      <div class="card" style="width: 18rem;">
    
        <div class="card-body">
            <h5 class="card-title">${algo.nombre}</h5>
            <p class="card-text">${algo.rol}</p>
            <p class="card-text">${algo.tareas}</p>
        </div>
    </div>
      `
    });
  })
}

usuarios();