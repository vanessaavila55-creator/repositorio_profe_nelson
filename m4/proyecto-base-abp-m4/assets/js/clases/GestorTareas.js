import Tarea from "./Tarea.js";

class GestorTareas {
    constructor() {
        this.tareas = []; // Almacenamiento temporal en memoria
    }

    // CREATE: Agregar una nueva tarea
    crearTarea(descripcion) {
        if (!descripcion || descripcion.trim() === "") {
            throw new Error("La descripción no puede estar vacía.");
        }

        const nuevaTarea = new Tarea(descripcion);
        this.tareas.push(nuevaTarea);
        return nuevaTarea;
    }

    // READ: Obtener todas las tareas o una específica por ID
    obtenerTareas() {
        return this.tareas;
    }

    obtenerTareaPorId(id) {
        return this.tareas.find((tarea) => tarea.id === id) || null;
    }

    // UPDATE: Modificar descripción y cambiar estado de true a false
    actualizarDescripcion(id, nuevaDescripcion) {
        const tarea = this.obtenerTareaPorId(id);

        if (!tarea) {
            throw new Error("No existe la tarea que desea actualizar.");
        }

        // Modificamos la descripción
        if (nuevaDescripcion && nuevaDescripcion.trim() !== "") {
            tarea.descripcion = nuevaDescripcion;
        }

        return tarea;
    }

    finalizarTarea(id) {
        const tarea = this.obtenerTareaPorId(id);

        if (!tarea) {
            throw new Error("No existe la tarea que desea actualizar.");
        }

        tarea.estado = true;

        return tarea;
    }

    // DELETE: Eliminar una tarea por ID
    eliminarTarea(id) {
        const indice = this.tareas.findIndex((tarea) => tarea.id === id);

        if (indice === -1) {
            throw new Error("No existe la tarea que desea eliminar.");
        }

        this.tareas.splice(indice, 1);

        return true;
    }
}

export default GestorTareas;
