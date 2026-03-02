// =====================================
// Conversión de Tipos en JavaScript
// =====================================

// JavaScript es de tipado dinámico.
// Puedes cambiar el tipo de una variable.
// Además, el propio lenguaje convierte tipos automáticamente
// cuando haces ciertas operaciones.


// ==============================
// 1️⃣ Conversión Explícita
// (La haces tú intencionadamente)
// ==============================


// 🔹 Convertir a Número
let input = "25";

let numero1 = Number(input);      // 25
let numero2 = parseInt("10px");   // 10
let numero3 = parseFloat("10.5"); // 10.5


// 🔹 Convertir a String
let saldo = 1500;

let texto1 = String(saldo);     // "1500"
let texto2 = saldo.toString();  // "1500"


// 🔹 Convertir a Boolean
// Aquí aparecen los conceptos Truthy y Falsy

console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

console.log(Boolean("Hola"));   // true
console.log(Boolean("0"));      // true
console.log(Boolean({}));       // true

// Falsy → 0, "", null, undefined, NaN
// Truthy → Todo lo demás


// ==============================
// 2️⃣ Coerción Implícita
// (La hace JavaScript automáticamente)
// ==============================


// 🔹 Con el operador +
// Si uno es string → convierte todo a string

console.log("5" + 2);  // "52"
console.log(10 + "5"); // "105"


// 🔹 Con -, *, /
// Intenta convertir todo a número

console.log("10" - 2);   // 8
console.log("5" * "5");  // 25
console.log("Hola" - 2); // NaN


// 🔹 En comparaciones

console.log(1 == "1");  // true  (convierte tipos)
console.log(1 === "1"); // false (no convierte tipos)


// Regla práctica:
// Usa === casi siempre para evitar bugs difíciles de detectar.