//Login
//new objet user for a test login
const userTest = {
    user : "franco" , 
    pass : "0000",
}
// creo una constante que interactue con el boton del formulario
const login = document.getElementById('sendRequest')
// llamo a la funcion login y agrego el metodo de evento
login.addEventListener('click', (e) => {
e.preventDefault()
// creo 2 funciones que soliciten la informacion desde el dom 
const user = document.getElementById('exampleInputText1').value.toLowerCase();
const pass = document.getElementById('exampleInputPassword1').value;
//genero un condicional para validar los datos
if (user === userTest.user && pass === userTest.pass) {
    Swal.fire({
        icon: 'success',
        title: `Bienvenido ${userTest.user}`,
    }).then((move) => {
        if (move.isConfirmed) { window.location.href = "./gamingshop.html" }
    })
} else {
    Swal.fire({
        icon: 'warning',
        title: `Vuelve a verificar los datos y intentalo nuevamente`,
    });
}
    login.reset()
})