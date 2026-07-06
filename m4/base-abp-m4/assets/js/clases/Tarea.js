const tareas = [];

class Tarea {
    constructor(nombre) {
        this.id = crypto.randomUUID();
        this.nombre = nombre;
    }

    //MÉTODO DE INSTANCIA

    actualizar() {
        const foundTarea = tareas.find((tarea) => tarea.id == this.id);

        if (foundTarea) {
            foundTarea.nombre = this.nombre;
        }
    }

    //MÉTODO ESTÁTICO

    static obtenerTareas() {
        return tareas;
    }

    static obtenerPorId(id) {
        return tareas.find((tarea) => tarea.id == id);
    }
}

const t1 = new Tarea("Tarea 1");
const t2 = new Tarea("Tarea 2");

tareas.push(t1);
tareas.push(t2);

export default Tarea;
