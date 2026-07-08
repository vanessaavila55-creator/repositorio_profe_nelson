const getData = () => {
    const productos = [
        {id:1, nombre: "Producto 1", precio: 4500},
        {id:2, nombre: "Producto 2", precio: 6500},
        {id:3, nombre: "Producto 3", precio: 8000},
    ];

    return new Promise((resolve, reject)=> {

        setTimeout(()=> {
            resolve(productos);
        }, 5000);

    });
}


console.log("Iniciando aplicación");

getData().then((productos) => {
    console.table(productos);
}).finally(()=> {
    console.log("Terminando aplicación");
})


