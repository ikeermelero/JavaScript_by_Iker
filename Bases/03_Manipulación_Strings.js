// Aunque los strings son primitivos (inmutables),
// JavaScript los envuelve temporalmente en un objeto
// cuando usamos métodos como .toUpperCase() o .length.
// Esto nos permite manipular texto fácilmente
// sin modificar el valor original.

let texto = "javascript";

console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto);               // "javascript" (no cambia)

/*
==============================
    Manipulación de Strings
==============================
*/
// 1️⃣ Cambiar mayúsculas / minúsculas
let correo = "ikermelero@gmail.com";

let correoNormalizado = correo.toLowerCase();
console.log(correoNormalizado); // "ikermelero@gmail.com"

console.log(correo.toUpperCase()); // "IKERMELERO@GMAIL.COM"


// 2️⃣ Eliminar espacios innecesarios
let nombreIngresado = "   Iker Melero   ";

let nombreLimpio = nombreIngresado.trim();
console.log(nombreLimpio); // "Iker Melero"


// 3️⃣ Buscar texto dentro de otro texto
let frase = "JavaScript es un lenguaje fascinante";

console.log(frase.includes("fascinante")); // true
console.log(frase.includes("javascript")); // false (case-sensitive)


// 4️⃣ Convertir un string en array
let listaCompra = "manzanas, peras, plátanos";

let frutas = listaCompra.split(", ");
console.log(frutas);
// ["manzanas", "peras", "plátanos"]

/*
==============================
 Recordatorio rápido de tipos vistos
==============================
*/

// undefined → variable declarada sin valor
let direccion;
console.log(direccion); // undefined


// symbol → identificador único
const id = Symbol("id_unico");


// bigint → números enteros muy grandes
const numeroMuyGrande = 9007199254740991n;