class Persona {
    //AQUÍ SE DEFINEN LAS PROPIEDADES DE UN OBJETO
    constructor(nombre, apellido, rut, puntos = 0) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rut = rut;
        this.puntos = puntos;
    }

    //MÉTODOS -> FUNCIONES -> COMPORTAMIENTO

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    agregarPuntos(cantidad) {
        cantidad = Number(cantidad);

        if (isNaN(cantidad) || cantidad <= 0) {
            return "Cantidad inválida o cantidad no supera los 0 puntos.";
        } else {
            this.puntos += cantidad;
            return this.puntos;
        }
    }
}

//OBJETOS -> INSTANCIAS
const persona1 = new Persona("Marta", "Figueroa", "1-1", 5000);
const persona2 = new Persona("Pedro", "Soto", "2-2");

persona2.agregarPuntos(800);

console.log(persona2.puntos);

