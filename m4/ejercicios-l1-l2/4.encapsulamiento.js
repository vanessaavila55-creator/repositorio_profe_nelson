class CuentaBancaria {
    #saldo; // Propiedad privada (ES6)

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    //MÉTODO TIPO SETTER -> PERMITE CAMBIAR LOS ESTADOS DE LA CLASE
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: ${this.#saldo}`);
        } else {
            console.log("El monto debe ser mayor a 0.");
        }
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.#saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }

    //MÉTODO DE TIPO GETTER
    verSaldo() {
        console.log(`Saldo actual: ${this.#saldo}`);
    }
}

const cuenta1 = new CuentaBancaria(5000);

Object.seal(cuenta1); //SELLAMOS EL OBJETO EVITANSO SU EXTENSIÓN DINÁMICA
cuenta1.saldo = 2000;

cuenta1.depositar(3000);

cuenta1.retirar(1500);

cuenta1.verSaldo();

console.log(cuenta1);
