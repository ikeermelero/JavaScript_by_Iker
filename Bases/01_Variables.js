/*
========================================
📦 VARIABLES EN JAVASCRIPT
========================================

Las variables son contenedores que almacenan datos.
Estos datos pueden cambiar durante la ejecución del programa
(según cómo declaremos la variable).

Pueden almacenar:
- Números
- Strings (texto)
- Booleanos
- Objetos
- Arrays
- Funciones
- etc.
*/


/*
========================================
🟡 var (Forma antigua - NO recomendada hoy)
========================================

- Tiene alcance de función (function scope).
- Permite redeclarar la misma variable.
- Puede causar errores difíciles de detectar.

Hoy en día se evita usar var.
*/

var ejemploVar = "Soy una variable declarada con var";
var ejemploVar = "Puedo redeclararme sin error"; // ⚠️ Esto puede ser problemático

console.log(ejemploVar);


/*
========================================
🟢 let (Variable reutilizable)
========================================

- Tiene alcance de bloque (block scope).
- Se puede reasignar.
- NO se puede redeclarar en el mismo bloque.
- Es la opción recomendada cuando el valor va a cambiar.
*/

let nombre = "Iker";
let numeroFavorito = 11;
let esProgramador = true;

console.log("Mi nombre es:", nombre);
console.log("Mi número favorito es:", numeroFavorito);
console.log("¿Soy programador? ", esProgramador);

// Reasignación permitida
nombre = "Iker Melero";
console.log("Nombre actualizado:", nombre);

// typeof permite saber el tipo de dato
console.log("El tipo de dato de esProgramador es:", typeof esProgramador);


/*
========================================
🔵 const (Constante)
========================================

- Tiene alcance de bloque.
- NO se puede reasignar.
- Debe inicializarse en el momento de declararse.
- Es la opción recomendada por defecto.

👉 Usa const siempre que el valor no vaya a cambiar.
*/

const PI = 3.1416;
const pais = "España";

console.log("Valor de PI:", PI);
console.log("País:", pais);

// ❌ Esto daría error:
// PI = 3.14;


/*
========================================
📌 DIFERENCIA CLAVE ENTRE let y const
========================================

let  → El valor puede cambiar.
const → El valor NO puede cambiar.

Buenas prácticas modernas:
1. Usa const por defecto.
2. Usa let solo cuando necesites reasignar.
3. Evita var.
*/


/*
========================================
➕ Ejemplo práctico
========================================
*/

let edad = 25;
const añoNacimiento = 2000;

edad = 26; // ✔️ permitido
// añoNacimiento = 1999; ❌ no permitido

console.log("Edad actual:", edad);
console.log("Año de nacimiento:", añoNacimiento);
