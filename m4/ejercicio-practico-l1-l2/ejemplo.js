let persona = {
    nombre: "Pedro",
    apellido: "Soto",
};

let personaJson = JSON.stringify(persona)
console.log(typeof(personaJson));

console.log(JSON.parse(personaJson));
