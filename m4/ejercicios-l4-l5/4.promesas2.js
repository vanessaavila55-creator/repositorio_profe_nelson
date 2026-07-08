const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email == "usuario@gmail.com" && password == "123456") {
                resolve("Autorizado...");
            } else {
                reject("Error en autenticación, vuelva a intentar.");
            }
        }, 3500);
    });
};


login("usuario@gmail.com", "123456")
.then(respuesta => {
    console.log(respuesta);
    console.log("Redireccionando al usuario.");
})
.catch(error => {
    console.log(error);
})
.finally(()=> {
    console.log("registrando intento login");
})