// verificar_par.js
const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite un número: "));

if (isNaN(numero)) {
  console.log("Por favor ingrese un número válido.");
} else if (numero % 2 === 0) {
  console.log("El número " + numero + " es par.");
} else {
  console.log("El número " + numero + " es impar.");
}
