// notas.js
let nombre = "Alexander";
let nota1 = 4.2;
let nota2 = 3.8;
let nota3 = 3.0;

let promedio = (nota1 + nota2 + nota3) / 3;
let resultado = promedio >= 3.5 ? "Aprobó" : "No aprobó";

console.log("Nombre:", nombre);
console.log("Notas:", nota1, nota2, nota3);
console.log("Promedio:", promedio.toFixed(2));
console.log("Resultado:", resultado);
