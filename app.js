function edadActual() {
  let dia;
  let mes;
  let año = 2022;
  let añoNacimiento;
  do {
    dia = parseFloat(prompt("dia de nacimiento"));
    mes = parseFloat(prompt("mes de nacimiento"));
    añoNacimiento = parseFloat(prompt("año de nacimiento"));
  } while (isNaN(dia) || isNaN(mes) || isNaN(añoNacimiento));
  {
    alert(
      "si tu fecha de nacimiento es " +
        dia +
        "/" +
        mes +
        "/" +
        añoNacimiento +
        " tu edad es de " +
        (año - añoNacimiento) +
        " años "
    );
  }
}

edadActual();
