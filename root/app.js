
const divDolar = document.getElementById('dolar')
const divBanco = document.getElementById('dolarBancario')

fetch('https://criptoya.com/api/dolar')
.then(response => response.json())
.then(({oficial,solidario,blue,ccb,mep,ccl}) => {
    divDolar.innerHTML = `
    <ul class="list-group">
  <li class="list-group-item">Oficial: $${oficial}</li>
  <li class="list-group-item">Solidario: $${solidario}</li>
  <li class="list-group-item">Blue: $${blue}</li>
  <li class="list-group-item">CCB: $${ccb}</li>
  <li class="list-group-item">MEP: $${mep}</li>
  <li class="list-group-item">CCL: $${ccl}</li>
</ul>
    `
})
setInterval(() => {
    fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(({oficial,solidario,blue,ccb,mep,ccl}) => {
        divDolar.innerHTML = `
        <h3 class="mb-1">Dolar Pais</h3>
        <ul class="list-group">
        <li class="list-group-item">Oficial: $${oficial}</li>
        <li class="list-group-item">Solidario: $${solidario}</li>
        <li class="list-group-item">Blue: $${blue}</li>
        <li class="list-group-item">CCB: $${ccb}</li>
        <li class="list-group-item">MEP: $${mep}</li>
        <li class="list-group-item">CCL: $${ccl}</li>
      </ul>
        `
    })
}, 1000)
fetch('https://criptoya.com/api/bancostodos')
.then(response => response.json()).then(({bna,galicia,bbva,hsbc,macro,naranjax,supervielle})=> {
  divBanco.innerHTML = `
  <h2>BANCOS PRINCIPALES</h2>
  <br>
  <ul class="list-group">
      <h3 class="mb-1">Banco Nacion</h3>
    <li class="list-group-item">Precio sin impuesto pais:$ ${bna.ask}</li>
    <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${bna.totalAsk}</li>
    <li class="list-group-item">Precio para venta:$ ${bna.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco Galicia</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${galicia.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${galicia.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${galicia.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco BBVA</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${bbva.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${bbva.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${bbva.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco HSBC</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${hsbc.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${hsbc.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${hsbc.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco Supervielle</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${supervielle.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${supervielle.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${supervielle.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco NaranjaX</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${naranjax.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${naranjax.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${naranjax.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco MACRO</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${macro.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${macro.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${macro.bid}</li>
  </ul>
  <br>
  `
}) 
setInterval(() => {
fetch('https://criptoya.com/api/bancostodos')
  .then(response => response.json()).then(({bna,galicia,bbva,hsbc,macro,naranjax,supervielle})=> {
      divBanco.innerHTML = `
      <h2>BANCOS PRINCIPALES</h2>
      <br>
      <ul class="list-group">
      <h3 class="mb-1">Banco Nacion</h3>
    <li class="list-group-item">Precio sin impuesto pais:$ ${bna.ask}</li>
    <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${bna.totalAsk}</li>
    <li class="list-group-item">Precio para venta:$ ${bna.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco Galicia</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${galicia.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${galicia.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${galicia.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco BBVA</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${bbva.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${bbva.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${bbva.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco HSBC</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${hsbc.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${hsbc.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${hsbc.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco Supervielle</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${supervielle.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${supervielle.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${supervielle.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco NaranjaX</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${naranjax.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${naranjax.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${naranjax.bid}</li>
  </ul>
  <br>
  <ul class="list-group">
  <h3 class="mb-1">Banco MACRO</h3>
  <li class="list-group-item">Precio sin impuesto pais:$ ${macro.ask}</li>
  <li class="list-group-item">Precio para compra CON impuesto PAIS 30% + GANANCIAS 35%:$ ${macro.totalAsk}</li>
  <li class="list-group-item">Precio para venta:$ ${macro.bid}</li>
  </ul>
  <br>
      `
  })  
}, 100000)

const fecha = document.getElementById("fecha");
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{ weekday:'long',month:'short',day:'numeric'})
// class User {
//   constructor( nombreTarea, textoTarea = "sentate y relajate") {
//     this.nombre = nombreTarea;
//     this.texto = textoTarea;
//   }
// }

// const usuarios = JSON.parse(localStorage.getItem('storageUsuarios')) ?? []


// const formTareas = document.getElementById('idForm')
// const botonUsuarios = document.getElementById('botonUsuarios')
// const divUsuarios = document.getElementById('divUsuarios')

// formTareas.addEventListener('submit', (e) => {
// e.preventDefault();
// console.log(e)
// let newData = new FormData (e.target)
// const tarea = new User (newData.get('nombre'), newData.get('texto'))
// usuarios.push(tarea)
// localStorage.setItem('storageUsuarios', JSON.stringify(usuarios))
// formTareas.reset()
// Toastify({
//   text: "Tarea agregada",
//   duration: 3000,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "right", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "linear-gradient(to top left, #217D81, #D19977)",
//   },
//   onClick: function(){} // Callback after click
// }).showToast();
// })

// botonUsuarios.addEventListener('click', () => {
//   let storageUsuarios = JSON.parse(localStorage.getItem('storageUsuarios'))
//   divUsuarios.innerHTML = ""
//   storageUsuarios.forEach((usuarios,indice) =>{
//     Swal.fire({
//       title: 'Usuario',
//       text:'Tareas',
//       html:` <div class="card border-primary mb-3 swal-fire-1" id="producto${indice}" style="max-width: 20rem;margin: 4px;">
//       <div class="card-header">Header</div>
//       <div class="card-body">
//       <h4 class="card-title">${usuarios.nombre}</h4>
//       <p class="card-text">${usuarios.texto}</p>
//       <button class="btn btn-danger">Eliminar Tarea</button>
// </div>
// </div>`
//     })
//   })
//   // storageUsuarios.forEach((usuarios,indice)=> {
//   //   document.getElementById(`tarea${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
//   //     document.getElementById(`tarea${indice}`).remove();
//   //     usuarios.splice(indice, 1);
//   //     localStorage.setItem('storageUsuarios', JSON.stringify(usuarios))
//   //     console.log(`${tarea.nombre} eliminada`)
//   //     console.log(usuarios)
//   //   })
//   // })
// })
