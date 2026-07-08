const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email == "usuario@gmail.com" && password == "123456") {
                resolve("Autorizado...");
            } else {
                reject("Autenticación fallida, vuelva a intentar.");
            }
        }, 3500);
    });
};

const procesarLogin = async () => {
    try {
        let respuesta = await login("usuario@gmail.com", "123456");
        console.log(respuesta);
    } catch (error) {
        console.error("Error:", error);
    }
};

console.log("Código antes...");

procesarLogin();

console.log("Código después...");