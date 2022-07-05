class user {
  constructor(nombre, rol, id, tareas = "sentate y relajate") {
    this.nombre = nombre;
    this.rol = rol;
    this.id = id;
    this.tareas = tareas;
  }
}

const usuario1 = new user("Franco Carrazana", "Empleado", 1, "VALIACION");
const usuario2 = new user("David Pereyra", "Empleado", 2, "PEDIDOS");
const usuario3 = new user("Federico Celis", "Empleado", 3, "ATENCION");
const usuario4 = new user("Cristian Bianco", "jefe", 4);
const miembros = [usuario1, usuario2, usuario3, usuario4];
// Funcion principal
function usuarios() {
  // soliciata un ID para dar un valor a usuarios
  do {
    usuarios = parseInt(prompt("Ingrese id"));
  } while (isNaN(usuarios));
  // recibe valor de usarios para filtrar y dar como resultado ID
  const usuariosLogins = miembros.filter((miembro) => miembro.id == usuarios);
  // recibe el ID y toma sus valores para devolverlos en una alerta
  return usuariosLogins.forEach((miembros) => {
    alert(
      `Bienvenido ${miembros.nombre} (${miembros.rol}), tus tareas de hoy son: ${miembros.tareas}`
    );
  });
}

usuarios();
