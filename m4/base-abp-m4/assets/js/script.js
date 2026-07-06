import Tarea from "./clases/Tarea.js";

//ELEMENTOS DOM A MANIPULAR

const listaTareasDom = document.getElementById("lista-tareas-dom");

//CAPTURAR DEL DOM  LISTA DE TAREAS

const crearLiTareas = (tarea) => {
    let { id, nombre } = tarea;
    return `
        <li class="my-2">
            <span class="me-5 d-inline-block">${nombre}</span>
            <button class="btn btn-warning btn-editar" data-id="${id}" data-nombre="${nombre}">Editar</button>
        </li>
    `;
};

const mostrarTareas = (lista = []) => {
    let elementoLista = "";
    for (const tarea of lista) {
        elementoLista += crearLiTareas(tarea);
    }

    listaTareasDom.innerHTML = elementoLista;
};

const main = () => {
    const listaTareas = Tarea.obtenerTareas();
    mostrarTareas(listaTareas);
};

main();

//EVENTOS MANIPULACIÓN DOM....

//DELEGACIÓN EVENTOS BOTÓN UPDATE TAREAS

listaTareasDom.addEventListener("click", (event) => {
    const elemento = event.target;

    if (elemento.className.includes("btn-editar")) {
        const id = elemento.dataset.id;

        let tarea = Tarea.obtenerPorId(id);

        if (tarea) {
            tarea.nombre = prompt("Ingresa el nuevo nombre de la tarea");
            tarea.actualizar();

            const listaTareas = Tarea.obtenerTareas();
            mostrarTareas(listaTareas);

            alert("Tarea actualizada correctamente.");
        }
    }
});
