import GestorTareas from "./clases/GestorTareas.js";

const gestorTareas = new GestorTareas();

const crearFilaTabla = (tarea) => {
    let { id, descripcion, estado, fechaCreacion } = tarea;

    let estadoStr = estado ? "Finalizado" : "Pendiente";

    let disabled = estado ? "disabled" : "";

    let badge = estado ? "success" : "warning";

    return `
        <tr>
            <th scope="row">${id}</th>
            <td>${descripcion}</td>
            <td>
                <span class="badge rounded-pill text-bg-${badge}">${estadoStr}</span>
            </td>
            <td>${fechaCreacion}</td>
            <td>
                <button class="btn btn-warning btn-finalizar ${disabled}" data-id="${id}">Finalizar</button>
                <button class="btn btn-danger btn-eliminar" data-id="${id}">Elminar</button>
            </td>
        </tr>
    `;
};


const statsTareas = () => {
    document.getElementById("stat-totales").textContent = gestorTareas.cantidadTareas();
    document.getElementById("stat-finalizadas").textContent = gestorTareas.cantidadTareasFinalizadas();
    document.getElementById("stat-pendientes").textContent = gestorTareas.cantidadTareasPendientes();
}

const alertSinTareas = document.getElementById("alert-sin-tareas");
const tablaTareas = document.getElementById("tabla-tareas");

const cargarTareasTabla = (listaTareas = []) => {
    statsTareas();
    if (listaTareas.length == 0){
        
        alertSinTareas.classList.remove("d-none");
        tablaTareas.classList.add("d-none");

        return;
    }

    let acumuladorFilas = "";
    for (const tarea of listaTareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    }

    const cuerpoTabla = document.querySelector("#tabla-tareas tbody");

    cuerpoTabla.innerHTML = acumuladorFilas;

    alertSinTareas.classList.add("d-none");
    tablaTareas.classList.remove("d-none");
};

const actualizarTabla = async () => {
    const tareas = await gestorTareas.obtenerTareas();
    cargarTareasTabla(tareas);
}

const main = () => {
    actualizarTabla();
};

main();

//EVENTO FORMULARIO ADD TAREA

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();

        let descripcion = document.getElementById(
            "input-descripcion-tarea",
        ).value;

        gestorTareas.crearTarea(descripcion);

        //AL TERMINAR DE CREAR UNA TAREA ACTUALIZAMOS LAS TAREAS EN LA TABLA
        const tareas = await gestorTareas.obtenerTareas();
        cargarTareasTabla(tareas);

        //LIMPIAMOS EL FORMULARIO
        formAddTarea.reset();
    } catch (error) {
        console.log(error);
    }
});

//EVENTO FINALIZAR TAREA

const cuerpoTabla = document.querySelector("#tabla-tareas tbody");

cuerpoTabla.addEventListener("click", (event) => {
    const elemento = event.target;

    if (elemento.nodeName == "BUTTON" && elemento.className.includes("btn-finalizar")){
        
        let confirmacion = confirm("Está seguro que desea finalizar la tarea?");

        if(!confirmacion) return;

        let id = elemento.dataset.id;

        const tarea = gestorTareas.finalizarTarea(id);

        alert(`La tarea ${tarea.descripcion} ha finalizado con éxito!`);
        
        actualizarTabla();
    }
});


cuerpoTabla.addEventListener("click", async (event) => {
    const elemento = event.target;

    if (elemento.nodeName == "BUTTON" && elemento.className.includes("btn-eliminar")){

        let id = elemento.dataset.id;
        const tarea = await gestorTareas.obtenerTareaPorId(id);

        let confirmacion = confirm(`Está seguro que desea eliminar la tarea: '${tarea.descripcion}'?`);

        if(!confirmacion) return;

        let respuesta = gestorTareas.eliminarTarea(id);

        if(respuesta) alert(`Tarea con ${id}, eliminada con éxito...`);

        actualizarTabla(); 
    }
});
