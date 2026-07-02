//IMPORTAMOS LAS CLASES / FUNCIONES / VARIABLES QUE NECESITAMOS UTILIZAR
import Usuario from "./clases/Usuario.js";

//FUNCIÓN QUE PERMITE MOSTRAR / ACTUALIZAR, LOS USUARIOS EN EL DOM
const mostrarUsuarios = (listaUsuarios = []) => {
    //CAPTURAR LA UL DEL DOM
    const listadoUsuariosDom = document.getElementById("listadoUsuarios");
    listadoUsuariosDom.innerHTML = "";

    for (const usuario of listaUsuarios) {
        const li = document.createElement("li");

        let { run, nombre, apellido } = usuario;

        li.textContent = `RUN: ${run}, Nombre: ${nombre}, Apellido: ${apellido}`;

        //LE AGREGAMOS LOS LI COMO HIJOS A LA UL
        listadoUsuariosDom.append(li);
    }
};

//EVENTO FORMULARIO CREAR USUARIOS

const formAddUsuario = document.getElementById("formAddUsuario");

formAddUsuario.addEventListener("submit", (event) => {
    //EVITA QUE SE REALICEN LAS ACCIONES POR DEFECTO DE SUBMIT
    event.preventDefault();

    //CAPTURAR INPUTS
    const nombreInput = document.getElementById("nombreInput");
    const apellidoInput = document.getElementById("apellidoInput");
    const runInput = document.getElementById("runInput");

    let nombre = nombreInput.value;
    let apellido = apellidoInput.value;
    let run = runInput.value;

    const nuevoUsuario = new Usuario(nombre, apellido, run);

    let respuestaGuardado = nuevoUsuario.guardar(); //PUEDE SER TRUE O FALSE

    //SI EXISTE UN USUARIO CON EL MISMO RUN ENVIAMOS UN MENSAJE CON EL ERROR
    if (!respuestaGuardado) {
        return alert(`Ya existe un usuario con el mismo RUN: ${run}`);
    }

    alert("Usuario creado correctamente!");
    formAddUsuario.reset();

    //ACTUALIZAR LA LISTA CON EL NUEVO USUARIO AGREGADO
    const usuarios = Usuario.buscarTodos();

    mostrarUsuarios(usuarios);
});

const main = () => {
    let usuarios = Usuario.buscarTodos();
    mostrarUsuarios(usuarios);
};

main();
