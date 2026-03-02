/*
========================================
⚙️ OPERADORES EN JAVASCRIPT
========================================

Los operadores son símbolos que permiten realizar operaciones
sobre valores y variables.

Tipos principales:
- Aritméticos
- Comparación
- Lógicos
- Asignación
- Incremento / Decremento
- Ternario
- Nullish / Coalescencia
*/


let textoUno = "11";
let booleanoUno = false;
let numeroIker = 11;
let numeroRichi = 22;
let numeroGorka = 33;
let cero = 0;


/*
========================================
➕ 1. OPERADORES ARITMÉTICOS
========================================
Sirven para realizar operaciones matemáticas.
*/

console.log("Suma:", numeroRichi + numeroGorka);
console.log("Resta:", numeroRichi - numeroGorka);
console.log("Multiplicación:", numeroRichi * numeroGorka);
console.log("División:", numeroRichi / numeroGorka);
console.log("Módulo (resto):", numeroRichi % numeroGorka);


/*
========================================
📊 2. OPERADORES DE COMPARACIÓN
========================================
Comparan valores y devuelven true o false.
*/

console.log("== Comparación débil:", numeroIker == textoUno);
// true → porque compara solo el valor (convierte tipos)

console.log("=== Comparación estricta:", numeroIker === textoUno);
// false → porque compara valor Y tipo

console.log("!= Diferente débil:", numeroIker != textoUno);
console.log("!== Diferente estricta:", numeroIker !== textoUno);

/*
⚠️ Importante:
== convierte tipos automáticamente.
=== compara valor y tipo.
👉 En proyectos reales se recomienda usar === siempre.
*/

console.log("Mayor que:", numeroIker > numeroGorka);
console.log("Menor que:", numeroIker < numeroGorka);
console.log("Mayor o igual:", numeroIker >= numeroGorka);
console.log("Menor o igual:", numeroIker <= numeroGorka);


/*
⚠️ Cuidado con las conversiones automáticas
*/

console.log("0 == false:", cero == booleanoUno);   // true -> por que a un "false" se le considera un "0"
console.log("0 === false:", cero === booleanoUno); // false -> por que a pesar de tener el mismo valor no son del mismo tipo


/*
========================================
🧠 3. OPERADORES LÓGICOS
========================================
Se utilizan para combinar condiciones.
*/

let esMayorDeEdad = true;
let tieneCarnet = false;

console.log("AND (&&):", esMayorDeEdad && tieneCarnet);
// true solo si ambas condiciones son true

console.log("OR (||):", esMayorDeEdad || tieneCarnet);
// true si al menos una es true

console.log("NOT (!):", !esMayorDeEdad);
// Invierte el valor


/*
========================================
📝 4. OPERADORES DE ASIGNACIÓN
========================================
Permiten asignar y modificar valores.
*/

let puntos = 10;

puntos += 5;  // puntos = puntos + 5
puntos -= 3;  // puntos = puntos - 3
puntos *= 2;  // puntos = puntos * 2
puntos /= 4;  // puntos = puntos / 4

console.log("Puntos finales:", puntos);


/*
========================================
🔁 5. INCREMENTO Y DECREMENTO
========================================
*/

let contador = 0;

contador++; // Incrementa en 1
contador--; // Decrementa en 1

console.log("Contador:", contador);


/*
========================================
❓ 6. OPERADOR TERNARIO
========================================
Forma corta de un if.
*/

let edad = 18;

let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);


/*
========================================
🆕 7. NULLISH COALESCING (??)
========================================
Devuelve el valor de la derecha si el de la izquierda es null o undefined.
*/

let nombreUsuario = null;
let nombreFinal = nombreUsuario ?? "Usuario por defecto";

console.log("Nombre final:", nombreFinal);


/*
========================================
📌 BUENAS PRÁCTICAS
========================================

1. Usa === en lugar de ==.
2. Evita depender de conversiones automáticas.
3. Usa operadores lógicos para simplificar condiciones.
4. Usa el ternario solo cuando mejore la legibilidad.
*/
