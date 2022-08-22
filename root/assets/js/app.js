//Creo una class para la generacion de objetos
class Games {
  constructor(product, price, stock) {
    this.product = product;
    this.price = price;
    this.stock = stock;
  }
}

//Declaracion de array
let arrayGames = [];

//Consulta y creacion de localStorage con operador termario
let gamesStorage = localStorage.getItem("gamesStorage")
  ? (arrayGames = JSON.parse(localStorage.getItem("gamesStorage")))
  : localStorage.setItem("gamesStorage", JSON.stringify(arrayGames));

const button = document.getElementById("chargeForm");
const productDiv = document.getElementById("product");

//Creo un evento que interactue con el DOM
button.addEventListener("submit", (e) => {
  e.preventDefault();
  //declaro variables y pido sus valores desde el DOM
  let gameName = document.getElementById("nameProduct").value.toLowerCase();
  let priceGame = parseFloat(document.getElementById("priceProduct").value);
  let stockGame = parseInt(document.getElementById("priceProduct").value);
  //Crer nuevos objetos
  const games = new Games(gameName, priceGame, stockGame);
  //Lo incorporo al array
  arrayGames.push(games);

  //Lo incorporo al localStorage
  localStorage.setItem("gamesStorage", JSON.stringify(arrayGames));

  productDiv.innerHTML = "";

  chargeForm.reset();
  //Incorporar el producto en el DOM
  arrayGames.forEach((product, index) => {
    productDiv.innerHTML += `<div class="gamesDiv" id="product${index}">
                                      <h2>${product.product}</h2>
                                      <h5>$${product.price}</h5>
                                      <p>Stock: ${product.stock}</p>
                                      <input type="button" value="Eliminar" id="eliminar">
                                  </div>`;
  });
  //Incorporacion de Tostify
  Toastify({
    text: "Producto incorporado",
    duration: 3500,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      border: "2px solid black",
      background: "rgb(97, 97, 156)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  //Eliminar el producto elegido
  arrayGames.forEach((product, index) => {
    document
      .getElementById(`product${index}`)
      .lastElementChild.addEventListener("click", () => {
        Swal.fire({
          title: "Está seguro de eliminar el producto?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, seguro",
          cancelButtonText: "No, no quiero",
        }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById(`product${index}`).remove();
            arrayGames.splice(index, 1);
            localStorage.setItem("gamesStorage", JSON.stringify(arrayGames));
            //incorporacion del Sweet Alert
            Swal.fire({
              icon: "success",
              title: `${product.product} eliminado`,
            });
          }
        });
      });
  });
  //Incorporacion de boton para ordenar alfabeticamente
  const orderButton = document.getElementById("ordenar");
  orderButton.addEventListener("click", () => {
    const orderProduct = document.getElementById("orderProduct").value;
    const minor = document.getElementById("minor").value;
    const elderly = document.getElementById("elderly").value;

    arrayGamesOrder = [...arrayGames];
    //Ordeno de menor a mayor segun el precio
    if (orderProduct === minor) {
      arrayGamesOrder.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    } else if (orderProduct === elderly) {
      arrayGamesOrder.sort((b, a) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    }

    productDiv.innerHTML = " ";
    //INcorro el array y envio nuevamento los datos al DOM
    arrayGamesOrder.forEach((product, index) => {
      productDiv.innerHTML += `<div class="gamesDiv" id="product${index}">
                                      <h2>${product.product}</h2>
                                      <h5>$${product.price}</h5>
                                      <p>Stock: ${product.stock}</p>
                                      <input type="button" value="Eliminar" id="eliminar">
                                  </div>`;
    });
    //Le doy funcion para eliminar productos en el DOM
    arrayGamesOrder.forEach((product, index) => {
      document
        .getElementById(`product${index}`)
        .lastElementChild.addEventListener("click", () => {
          Swal.fire({
            title: "Está seguro de eliminar el producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, seguro",
            cancelButtonText: "No, no quiero",
          }).then((result) => {
            if (result.isConfirmed) {
              document.getElementById(`producto${index}`).remove();
              arrayGamesOrder.splice(index, 1);
              localStorage.setItem(
                "gamesStorage",
                JSON.stringify(arrayGamesOrder)
              );
              //incorporacion del Sweet Alert
              Swal.fire({
                icon: "success",
                title: `${product.producto} eliminado`,
                confirmButtonText: "ok",
              });
            }
          });
        });
    });
  });
});

//Incorporando API
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "49825f7366msh1fee22b655db8dbp12adc9jsnfaf57e7bc3f5",
    "X-RapidAPI-Host": "best-game-price-search.p.rapidapi.com",
  },
};
fetch(
  "https://best-game-price-search.p.rapidapi.com/igaming/specials?page=1&limit=10&currency=USD",
  options
)
  //Tranformando la API a json
  .then((response) => response.json())
  .then((data) => {
    let game = data.results;
    //Haciendo una busqueda de los datos elegidos de la API
    game.forEach(({ img, title, price, id }) => {
      const juegos = `
          <div class="card" id="producto${id}" style="width: 20rem;">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body">
              <h2>${title}</h2>
              <p class="card-text">$${price} USD</p>
            </div>
          </div>
            `;
      //Insertando los datos en el DOM
      document.getElementById("juegos").innerHTML += juegos;
    });
  });
