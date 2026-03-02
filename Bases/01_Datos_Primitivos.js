// JavaScript es de tipado dinámico.
// No necesitas indicar el tipo de dato al crear una variable.
// El tipo se decide automáticamente en tiempo de ejecución.

let mensaje = "Hola";   // string
mensaje = 42;           // ahora es number
mensaje = true;         // ahora es boolean


/*
TIPOS DE DATOS PRIMITIVOS
Son valores simples, inmutables (no cambian el original)
y no son objetos.
*/

// 1️⃣ STRING → Texto
let nombre = "Juan";
let saludo = `Hola ${nombre}`; // Plantillas literales permiten interpolar

console.log(nombre.length); // JS lo envuelve temporalmente como objeto


// 2️⃣ NUMBER → Números (enteros y decimales)
let edad = 30;
let precio = 99.95;

let infinito = Infinity;
let noEsNumero = NaN;


// 3️⃣ BOOLEAN → true o false
let esMayorDeEdad = true;


// 4️⃣ NULL → ausencia intencional de valor
let usuario = null;


// 5️⃣ UNDEFINED → variable declarada sin valor
let direccion;
console.log(direccion); // undefined


// 6️⃣ SYMBOL → valor único (útil como identificador)
const id = Symbol("id_unico");


// 7️⃣ BIGINT → números enteros muy grandes
const numeroGrande = 9007199254740991n;


/*
Resumen rápido:
string  → texto
number  → números
boolean → verdadero/falso
null    → vacío intencional
undefined → sin valor asignado
symbol  → identificador único
bigint  → enteros muy grandes
*/