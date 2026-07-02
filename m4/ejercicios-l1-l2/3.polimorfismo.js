class Persona {
    //AQUÍ SE DEFINEN LAS PROPIEDADES DE UN OBJETO
    constructor(nombre, apellido, rut) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rut = rut;
    }

    //MÉTODOS -> FUNCIONES -> COMPORTAMIENTO

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    tipo() {
        return "Persona";
    }
}

class Cliente extends Persona {
    constructor(nombre, apellido, rut, puntos) {
        //SUPER NOS PERMITE PASAR A LA CLASE PADRE LOS ATRIBUTOS QUE LE CORRESPONDAN
        super(nombre, apellido, rut);
        //ATRIBUTOS PROPIOS DE LA CLASE
        this.puntos = puntos;
    }

    agregarPuntos(puntos) {
        this.puntos += puntos;
    }

    tipo() {
        return "Cliente";
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, rut, sueldo, cargo) {
        super(nombre, apellido, rut);
        this.sueldo = sueldo;
        this.cargo = cargo;
    }

    aumentarSueldo(monto) {
        this.sueldo += monto;
    }

    tipo() {
        return "Empleado";
    }
}

const cliente1 = new Cliente("Pedro", "Soto", "1-1", 5000);
const empleado1 = new Empleado(
    "Marta",
    "Pereira",
    "2-2",
    850_000,
    "Administrativa",
);


const listaPersonas = [cliente1, empleado1];

for (const persona of listaPersonas) {
    console.log("Nombre:", persona.nombre);
    console.log("Apellido:", persona.apellido);
    console.log("Tipo:", persona.tipo());
    console.log("*".repeat(50));
}
