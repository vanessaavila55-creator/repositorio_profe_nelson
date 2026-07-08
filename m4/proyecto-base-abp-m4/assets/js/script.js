import GestorTareas from "./clases/GestorTareas.js";

const gestorTareas = new GestorTareas();




const crearFilaTabla = (tarea) => {
    let {id, descripcion, estado, fechaCreacion} = tarea;

    let estadoStr = estado ? "Finalizado" : "Pendiente";

    return `
        <tr>
            <th scope="row">${id}</th>
            <td>${descripcion}</td>
            <td>${estadoStr}</td>
            <td>${fechaCreacion}</td>
            <td>
                <button class="btn btn-warning" class="btn-editar" data-id="${id}">Editar</button>
                <button class="btn btn-danger" class="btn-eliminar" data-id="${id}">Elminar</button>
            </td>
        </tr>
    `;
}


const cargarTareasTabla = (listaTareas = []) => {

    if(listaTareas.length == 0) return;

    let acumuladorFilas = "";
    for (const tarea of listaTareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    }

    const cuerpoTabla = document.querySelector("#tabla-tareas tbody");

    cuerpoTabla.innerHTML = acumuladorFilas;

};


const main = () => {
    const tareas = gestorTareas.obtenerTareas();
    cargarTareasTabla(tareas);
}

main();


//EVENTO FORMULARIO ADD TAREA

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        let descripcion = document.getElementById(
            "input-descripcion-tarea",
        ).value;

        gestorTareas.crearTarea(descripcion);


        //AL TERMINAR DE CREAR UNA TAREA ACTUALIZAMOS LAS TAREAS EN LA TABLA
        const tareas = gestorTareas.obtenerTareas();
        cargarTareasTabla(tareas);

        //LIMPIAMOS EL FORMULARIO
        formAddTarea.reset();

    } catch (error) {
        console.log(error);
    }
});
