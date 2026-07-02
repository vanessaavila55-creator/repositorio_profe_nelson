let nombre = "Pedro";
let apellido = "Soto";

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);


let calle = "Calle 1";
let numeroCasa = "A-56";
let comuna = "Macul";
let region = "Metropolitana";

//INFROMACIÓN DEL USARIO
let informacion = "Nombre: " + nombre + ", Apellido: " + apellido + ", Calle: " + calle + ", Número: " + numeroCasa + ", Comuna: " + comuna + ", Región: " + region + ".";

console.log(informacion);

//SOLUCIÓN UTILIZAR TEMPLATE LITERAL -> INTERPOLACIÓN

let dataUsuario = `Nombre: ${nombre}, Apellido: ${apellido}, Calle: ${calle}, Número: ${numeroCasa}, Comuna: ${comuna}, Región: ${region}.`;

console.log(dataUsuario);