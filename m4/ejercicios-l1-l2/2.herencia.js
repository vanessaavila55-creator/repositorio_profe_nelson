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
}

const cliente1 = new Cliente("Pedro", "Soto", "1-1", 5000);
const empleado1 = new Empleado(
    "Marta",
    "Pereira",
    "2-2",
    850_000,
    "Administrativa",
);

console.log("Cliente:", cliente1.nombreCompleto());
console.log("Empleado:", empleado1.nombreCompleto());


console.log(empleado1 instanceof Empleado); //true
