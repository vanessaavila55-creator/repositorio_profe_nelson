//CREAMOS UNA VARIABLE CON UN MONTO SIMULANDO EL BALANCE DE CUENTA DE UNA BASE DE DATOS

let balanceDB = 100_000;

//CAPTURAMOS EL ELEMENTO CON EL ID INDICADO Y LO GUARDAMOS EN UNA CONST
const balanceEl = document.getElementById("balance");

//ASIGNAMOS EL VALOR DEL BALANCE DE LA BASE DE DATOS SIMULADA AL ELEMENTO
balanceEl.innerText = balanceDB.toLocaleString("es-CL");

//SIMULAMOS LOS CONTACTOS DE UNA BASE DE DATOS

const contactos = [
    {
        id: 1,
        nombre: "John Doe",
        cbu: "123456789",
        alias: "john.doe",
        banco: "ABC Bank",
    },
    {
        id: 2,
        nombre: "Jane Smith",
        cbu: "987654321",
        alias: "jane.smith",
        banco: "XYZ Bank",
    },
];

//FUNCIÓN QUE PERMITA AGREGAR LOS CONTACTOS A LA LISTA

function dibujarContactos(listaContactos) {
    //CREAMOS UN STRING QUE SIRVA DE ACUMULADOR DE ELEMENTOS DE LISTA <LI>

    let elementosLista = "";

    //RECORREMOS / ITERAMOS SOBRE LOS ELEMENTOS DE LA LISTA
    for (const contacto of listaContactos) {
        let { id, nombre, cbu, alias, banco } = contacto;

        //USAMOA EL ACUMULADOR PARA REUNIR VARIOS ELEMENTOS DE LISTA SEGÚN LOS ELEMENTOS DE LA COLECCIÓN (ARRAY) DE CONTACTOS
        elementosLista += `
        <li class="list-group-item">
            <input class="form-check-input me-1" type="radio" name="contacto" value="${cbu}" id="contacto${id}">
            <label class="form-check-label" for="contacto${id}">
            ${nombre}, CBU: ${cbu}, Alias: ${alias}, Banco: ${banco}
            </label>
        </li>
    `;
    }

    //UNA VEZ TERMINADO EL CICLO, DEBEMOS AGREGAR LOS LI A LA LISTA CORRESPONDIENTE.

    //CAPTURAMOS LA LISTA DE CONTACTOS
    const listaContactosEl = document.getElementById("listaContactos");

    listaContactosEl.innerHTML = elementosLista;
}

//FUNCIÓN INICIAL
function main() {
    dibujarContactos(contactos);
}
main();



//EVENTO INPUT PARA BUSCAR CONTACTOS DE FORMA DINÁMICA

const contactoEl = document.getElementById("contacto");

contactoEl.addEventListener("input", function(event){

    let textoContacto = contactoEl.value;

    //NORMALIZAMOS EL TEXTO A MINÚSCULAS
    textoContacto = textoContacto.toLowerCase();

    //FILTRAR LOS CONTACTOS QUE COINCIDAN CON EL TEXTO INGRESADO.

    const contactosFiltrados = contactos.filter(contacto => {

        let { nombre, alias, cbu, banco } = contacto;

        nombre = nombre.toLowerCase();
        alias = alias.toLowerCase();
        banco = banco.toLowerCase();

        let reglaNombre = nombre.includes(textoContacto);
        let reglaAlias = alias.includes(textoContacto);
        let reghaCbu = cbu.includes(textoContacto);
        let reglaBanco = banco.includes(textoContacto);

        if(reglaNombre || reglaAlias  || reghaCbu || reglaBanco){
            return contacto;
        }else {
            return false;
        }

    });


    //LE MANDAMOS A LA FUNCIÓN QUE DIBUJA O CARGA LOS CONTACTOS EN LA LISTA NUESTRA COLLECCIÓN FILTRADA

    dibujarContactos(contactosFiltrados);
});