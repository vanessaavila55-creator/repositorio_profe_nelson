import Tarea from "./Tarea.js";

const getDataSeeds = async () => {
    let url = location.origin;
    const response = await fetch(url + "/tareas.json");
    const data = await response.json();
    return data;
};

const getDataApi = async (limit = 5) => {
    let url = "https://jsonplaceholder.typicode.com/todos?_limit=" + limit;

    const response = await fetch(url);
    const data = await response.json();

    const tareas = data.map(tarea => {
        let objTarea = new Tarea(tarea.title);
        objTarea.estado = tarea.completed;
        return objTarea;
    })

    return tareas;
};


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
        this.#guardarEnStorage();
        return nuevaTarea;
    }

    // READ: Obtener todas las tareas o una específica por ID
    async obtenerTareas() {
        await this.#leerDeStorage();
        return this.tareas.toReversed();
    }

    obtenerTareaPorId(id) {
        return this.tareas.find((tarea) => tarea.id === id) || null;
    }

    // UPDATE: Modificar descripción y cambiar estado de true a false
    finalizarTarea(id) {
        const tarea = this.obtenerTareaPorId(id);

        if (!tarea) {
            throw new Error("No existe la tarea que desea actualizar.");
        }

        tarea.estado = true;
        this.#guardarEnStorage();
        return tarea;
    }

    // DELETE: Eliminar una tarea por ID
    eliminarTarea(id) {
        const indice = this.tareas.findIndex((tarea) => tarea.id === id);

        if (indice === -1) {
            throw new Error("No existe la tarea que desea eliminar.");
        }

        this.tareas.splice(indice, 1);
        this.#guardarEnStorage();
        return true;
    }

    //FUNCIONES PRIVADAS PARA GESTIONAR ALMACENAMIENTO EN localStorage (API WEB)

    #guardarEnStorage() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }

    async #leerDeStorage() {
        const tareas = localStorage.getItem("tareas");

        if (tareas) {
            this.tareas = JSON.parse(tareas);
        } else {
            this.tareas = await getDataApi(15);
        }
    }

    //FUNCIONES STATS

    cantidadTareas(){
        return this.tareas.length;
    }

    cantidadTareasFinalizadas(){
        
        return this.tareas.filter(tarea => tarea.estado).length;
    }

    cantidadTareasPendientes(){
        return this.tareas.filter(tarea => !tarea.estado).length;
    }

}

export default GestorTareas;
