//LISTA DE USUARIOS
let listaUsuarios = [];

const persistenciaUsuarios = () => {
    //USAMOS LOCALSTORAGE

    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
};

const leerUsuariosLocalStorage = () => {
    let usuarios = localStorage.getItem("usuarios");

    if(usuarios){
        usuarios = JSON.parse(usuarios);

        usuarios = usuarios.map((u) => new Usuario(u.nombre, u.apellido, u.run));

        listaUsuarios = usuarios;

        return usuarios;
    }else {
        return listaUsuarios;
    }
};


class Usuario {
    constructor(nombre, apellido, run) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.run = run;
    }

    //MÉTODOS DE INSTANCIA
    guardar() {
        const existe = listaUsuarios.some((usuario) => usuario.run == this.run);

        if (existe) {
            return false;
        } else {
            listaUsuarios.push(this);
            persistenciaUsuarios();
            return true;
        }
    }

    //MÉTODOS ESTÁTICOS, NO NECESITAN INSTANCIA

    static buscarTodos() {
        let usuarios = leerUsuariosLocalStorage();
        return usuarios;
    }
}
//EXPORTAMOS LA CLASE PARA SER USADA EN OTROS ARCHIVOS.
export default Usuario;
