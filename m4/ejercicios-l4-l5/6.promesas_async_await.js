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
    try {
        let dolar = await getValorDolar();
        let euro = await getValorEuro();
        console.log("Dolar:", dolar);
        console.log("Euro:", euro);
    } catch (error) {
        console.log(error);
    }
};

calcularValores();