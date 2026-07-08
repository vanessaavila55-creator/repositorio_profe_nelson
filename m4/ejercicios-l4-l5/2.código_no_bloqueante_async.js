const primeraInstruccion = () => {
    console.log("primera instrucción");
};

const segundaInstruccion = () => {
    setTimeout(() => {
        console.log("segunda instrucción");
    }, 10000);
};

const terceraInstruccion = () => {
    console.log("tercera instrucción");
};

primeraInstruccion();
segundaInstruccion();
terceraInstruccion();
