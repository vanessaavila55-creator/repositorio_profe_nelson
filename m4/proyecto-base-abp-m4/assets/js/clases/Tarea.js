class Tarea {
    constructor(descripcion) {
        this.id = crypto.randomUUID(); // Genera un ID único automático
        this.descripcion = descripcion;
        this.estado = false; // false -> Pendiente / true -> Finalizado
        this.fechaCreacion = moment().format('DD/MM/YYYY'); // Fecha formateada
    }
};


export default Tarea;

console.log(crypto.randomUUID());