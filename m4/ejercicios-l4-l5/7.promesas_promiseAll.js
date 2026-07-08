const getValorDolar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(950.53);
        }, 4000);
    });
};

const getValorEuro = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1050.58);
        }, 4000);
    });
};

const calcularValores = async () => {
    
    const dolarPromesa = getValorDolar();
    const euroPromesa = getValorEuro();


    Promise.all([dolarPromesa, euroPromesa])
    .then(respuesta => {
        let [dolar, euro] = respuesta;
        console.log("Dolar:", dolar);
        console.log("Euro:", euro);
    })
    .catch(error => {
        console.log(error);
    })

};

calcularValores();