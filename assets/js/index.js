function cantidad() {
  let valor1 = Number(document.querySelector("#st1").value);
  if (valor1 < 0) {
    alert(
      (document.querySelector("#st1").innerHTML =
        "debes ingresar un numero mayor a 0")
    );
  }

  let valor2 = Number(document.querySelector("#st2").value);
  if (valor2 < 0) {
    alert(
      (document.querySelector("#st2").innerHTML =
        "debes ingresar un numero mayor a 0")
    );
  }

  let valor3 = Number(document.querySelector("#st3").value);
  if (valor3 < 0) {
    alert(
      (document.querySelector("#st3").innerHTML =
        "debes ingresar un numero mayor a 0")
    );
  }

  let resultado = valor1 + valor2 + valor3;

  if (resultado <= 10) {
    document.querySelector(".cantidad").innerHTML =
      "LLevas " + resultado + " Stickers";
  } else {
    document.querySelector(".cantidad").innerHTML =
      "Llevas demasiados Stickers";
  }
}

function limpiar() {
  document.getElementById("st1").value = "";
  document.getElementById("st2").value = "";
  document.getElementById("st3").value = "";
}

function pass() {
    let sel1 = document.querySelector("#select1").value;
    let sel2 = document.querySelector("#select2").value;
    let sel3 = document.querySelector("#select3").value;
    let pass = (sel1 + sel2 +sel3);
    if (pass==911 || pass==715 ) {
        document.querySelector('#validacion').innerHTML = 'password correcto'
    } else {
        document.querySelector('#validacion').innerHTML = 'password incorrecto'
    }
}
function actualiza(){
    document.getElementById("select1").value = "";
    document.getElementById("select2").value = "";
    document.getElementById("select3").value = "";
    window.location.reload();
} 