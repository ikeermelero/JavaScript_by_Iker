// =====================================
// ESTRUCTURAS DE CONTROL
// =====================================

// Permiten decidir qué código se ejecuta,
// repetir acciones y crear lógica real.
// Sin ellas, un programa sería solo líneas
// ejecutándose en orden sin inteligencia.


// =====================================
// 1️⃣ CONDICIONALES → if / else if / else
// =====================================

let seguidores = 12000;

if (seguidores > 10000) {
  console.log("Iker Melero ya es referente en programación 🚀");
} else if (seguidores > 1000) {
  console.log("La comunidad de Iker está creciendo 🔥");
} else {
  console.log("Estamos empezando, pero esto va para arriba.");
}

// 🔎 Recordatorio:
// Truthy → valores que se consideran true (1, "hola", {}, [])
// Falsy  → 0, "", null, undefined, NaN


// =====================================
// 2️⃣ SWITCH
// =====================================

// Ideal cuando comparas una sola variable
// contra muchos posibles valores.

let tipoContenido = "backend";

switch (tipoContenido) {
  case "frontend":
    console.log("Hoy Iker maqueta y pelea con el CSS.");
    break;

  case "backend":
    console.log("Hoy Iker optimiza la API y escala el servidor.");
    break;

  case "ia":
    console.log("Hoy Iker entrena modelos y habla del futuro.");
    break;

  default:
    console.log("Hoy toca improvisar contenido.");
}


// =====================================
// 3️⃣ BUCLE FOR
// =====================================

// Cuando sabes cuántas veces quieres repetir algo

console.log("Publicando 5 posts esta semana:");

for (let i = 1; i <= 5; i++) {
  console.log(`Post número ${i} publicado por Iker.`);
}


// =====================================
// 4️⃣ WHILE
// =====================================

// Cuando no sabes cuántas repeticiones habrá

let clientes = 0;

while (clientes < 3) {
  console.log("Nuevo cliente conseguido 💰");
  clientes++;
}


// =====================================
// 5️⃣ DO...WHILE
// =====================================

// Se ejecuta al menos una vez

let mensaje;

do {
  mensaje = "seguir";
  console.log("Iker sigue creando contenido.");
} while (mensaje !== "seguir");


// =====================================
// 6️⃣ FOR...OF (para arrays)
// =====================================

const proyectos = ["App TCG", "Marca personal", "Curso JS"];

for (const proyecto of proyectos) {
  console.log(`Trabajando en: ${proyecto}`);
}


// =====================================
// 7️⃣ FOR...IN (para objetos)
// =====================================

const perfilIker = {
  nombre: "Iker Melero",
  rol: "Full Stack Developer",
  objetivo: "Monetizar su conocimiento"
};

for (const propiedad in perfilIker) {
  console.log(`${propiedad}: ${perfilIker[propiedad]}`);
}


// =====================================
// EXTRA → break y continue
// =====================================

console.log("Simulación de semana productiva:");

for (let dia = 1; dia <= 7; dia++) {

  if (dia === 6) {
    console.log("Descanso estratégico.");
    continue; // salta este día
  }

  if (dia === 7) {
    console.log("Domingo: planificación.");
    break; // termina el bucle aquí
  }

  console.log(`Día ${dia}: trabajando en el negocio.`);
}