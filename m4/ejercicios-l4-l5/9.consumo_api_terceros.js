const getData = async () => {
    try {
        let url = "https://randomuser.me/api/";

        const response = await fetch(url);
        const data = await response.json();

        const usuario = data.results[0];

        return usuario;
    } catch (error) {
        console.log(error);
    }
};

const mostrarUsuario = (usuario) => {
    let nombre = usuario.name.first;
    let apellido = usuario.name.last;
    let email = usuario.email;
    let imagen = usuario.picture.medium;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
};

const main = async () => {
    const usuario = await getData();

    mostrarUsuario(usuario);
};

main();
