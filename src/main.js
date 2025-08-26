const sumarDosNumeros = function(a, b) {
  //console.log(a + b)
  return a + b;
}

const restarDosNumeros = function(a, b) {
  // console.log(a - b)
  return a - b;
}

const multiplicarDosNumeros = function(a, b) {
  // console.log(a * b)
  return a * b;
}

const dividirDosNumeros = function(a, b) {
  // console.log(a / b)
  return a / b;
}

const option = +prompt("Elige una opción: 1) Sumar 2) Restar 3) Multiplicar 4) Dividir");

const a = +prompt("Ingresa el primer número:");
const b = +prompt("Ingresa el segundo número:");

switch (option) {
  case 1:
    sumarDosNumeros(a, b);
    //console.log(`La suma de ${a} + ${b} es ${sumarDosNumeros(a, b)}`);
    alert(`La suma de ${a} + ${b} es ${sumarDosNumeros(a, b)}`);
    break;
  case 2:
    restarDosNumeros(a, b);
    //console.log(`La resta de ${a} - ${b} es ${restarDosNumeros(a, b)}`);
    alert(`La resta de ${a} - ${b} es ${restarDosNumeros(a, b)}`);
    break;
  case 3:
    multiplicarDosNumeros(a, b);
    //console.log(`La multiplicación de ${a} * ${b} es ${multiplicarDosNumeros(a, b)}`);
    alert(`La multiplicación de ${a} * ${b} es ${multiplicarDosNumeros(a, b)}`);
    break;
  case 4:
    dividirDosNumeros(a, b);
    //console.log(`La división de ${a} / ${b} es ${dividirDosNumeros(a, b)}`);
    alert(`La división de ${a} / ${b} es ${dividirDosNumeros(a, b)}`);
    break;
  default:
    console.log("Opción no válida");
}