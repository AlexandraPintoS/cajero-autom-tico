// Usuarios
var cuentas = [
    { nombre: "Regina Silva", saldo: 500, pin: 1234, rut: "11222333-4" },
    { nombre: "Daniel Soto", saldo: 900, pin: 5678, rut: "55666777-8" },
    { nombre: "Catalina Contreras", saldo: 100, pin: 1425, rut: "11444222-5" }
];
console.log("Cuentas: ", cuentas)

// Elementos del DOM
const divUsuario = document.getElementById("pantallaUsuario")
const divOperaciones = document.getElementById("pantallaOperaciones")
const botonConsultar = document.getElementById("consultar")
const botonRetiro = document.getElementById("retirarMonto")
const botonIngreso = document.getElementById("ingresarMonto")
const botonCancelar = document.getElementById("cancelar")
const botonCancelar2 = document.getElementById("cancelar2")
const botonCancelar3 = document.getElementById("cancelar3")
const divConsultar = document.getElementById("pantallaConsulta")
const divRetiro = document.getElementById("pantallaRetiro")
const divIngreso = document.getElementById("pantallaIngreso")

// Validacion de contraseña y usuario
function ingresarUsuario() {

    const rutInput = document.getElementById("rut").value;
    const pinInput = parseInt(document.getElementById("pin").value);
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput && c.pin === pinInput);

    if (cuentaEncontrada) {
        console.log(`Usuario ingresado: ${cuentaEncontrada.nombre}`)
        console.log(`Rut ingresado: ${cuentaEncontrada.rut}`)
        console.log(`Pin ingresado: ${cuentaEncontrada.pin}`)
        divUsuario.classList.add("ocultar");
        divOperaciones.classList.remove("ocultar");
        document.getElementById("saludo").innerHTML = `Bienvenido/a, ${cuentaEncontrada.nombre}!`;

    } else {
        alert("Contraseña o rut incorrectos, intente nuevamente.")
        rut.value = "";
        pin.value = "";
    }
}

// Pantalla de operaciones
botonConsultar.addEventListener("click", function () {
    divConsultar.classList.remove("ocultar");
    divOperaciones.classList.add("ocultar");
})

botonRetiro.addEventListener("click", function () {
    divRetiro.classList.remove("ocultar");
    divOperaciones.classList.add("ocultar");
})

botonIngreso.addEventListener("click", function () {
    divIngreso.classList.remove("ocultar");
    divOperaciones.classList.add("ocultar");
})

// botones para cancelar operación
const rutInput = document.getElementById("rut").value;
const pinInput = parseInt(document.getElementById("pin").value);

botonCancelar.addEventListener("click", function () {
    divUsuario.classList.remove("ocultar");
    divConsultar.classList.add("ocultar");
    pin.value = "";
    rut.value = "";
    alert("Operación cancelada, tenga un buen día.")
})

botonCancelar2.addEventListener("click", function () {
    divUsuario.classList.remove("ocultar");
    divRetiro.classList.add("ocultar");
    pin.value = "";
    rut.value = "";
    alert("Operación cancelada, tenga un buen día.")
})

botonCancelar3.addEventListener("click", function () {
    divUsuario.classList.remove("ocultar");
    divIngreso.classList.add("ocultar");
    pin.value = "";
    rut.value = "";
    alert("Operación cancelada, tenga un buen día.")
})

// Consultar el saldo
function consultarSaldo() {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        console.log("El saldo disponible es: ", cuentaEncontrada.saldo)
        document.getElementById("textoSaldo").innerHTML = `Saldo disponible: $${cuentaEncontrada.saldo}`;
        document.getElementById("textoSaldo2").innerHTML = `Saldo disponible: $${cuentaEncontrada.saldo}`;
        document.getElementById("textoSaldo3").innerHTML = `Saldo disponible: $${cuentaEncontrada.saldo}`;
    } else {
        alert("Error al consultar saldo, intente nuevamente.")
    }

}

// Botones de montos (retiro)
document.getElementById("boton100").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo - 100 >= 10 && cuentaEncontrada.saldo - 100 <= 990) {
            cuentaEncontrada.saldo -= 100;
            console.log("Se retiran $100")
            consultarSaldo();
            document.getElementById("textoSaldo2").innerHTML = `Has retirado $100 exitosamente.`;
        } else {
            alert("Error, saldo insuficiente.")
        }
    }
})

document.getElementById("boton200").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo - 200 >= 10 && cuentaEncontrada.saldo - 200 <= 990) {
            cuentaEncontrada.saldo -= 200;
            console.log("Se retiran $200")
            consultarSaldo();
            document.getElementById("textoSaldo2").innerHTML = `Has retirado $200 exitosamente.`;
        } else {
            alert("Error, saldo insuficiente.")
        }
    }
})

document.getElementById("boton500").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo - 500 >= 10 && cuentaEncontrada.saldo - 500 <= 990) {
            cuentaEncontrada.saldo -= 500;
            console.log("Se retiran $500")
            consultarSaldo();
            document.getElementById("textoSaldo2").innerHTML = `Has retirado $500 exitosamente.`;
        } else {
            alert("Error, saldo insuficiente.")
        }
    }
})

document.getElementById("boton800").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo - 800 >= 10 && cuentaEncontrada.saldo - 800 <= 990) {
            cuentaEncontrada.saldo -= 800;
            console.log("Se retiran $800")
            consultarSaldo();
            document.getElementById("textoSaldo2").innerHTML = `Has retirado $800 exitosamente.`;
        } else {
            alert("Error, saldo insuficiente.")
        }
    }
})

document.getElementById("boton900").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo - 900 >= 10 && cuentaEncontrada.saldo - 900 <= 990) {
            cuentaEncontrada.saldo -= 900;
            console.log("Se retiran $900")
            consultarSaldo();
            document.getElementById("textoSaldo2").innerHTML = `Has retirado $900 exitosamente.`;
        } else {
            alert("Error, saldo insuficiente.")
        }
    }
})

document.getElementById("botonotro").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);
    const otroMonto = prompt("Ingrese el monto a retirar:");

    if (cuentaEncontrada) {
        if (otroMonto && !isNaN(otroMonto) && cuentaEncontrada.saldo - parseInt(otroMonto) >= 10 && cuentaEncontrada.saldo - parseInt(otroMonto) <= 990) {
            cuentaEncontrada.saldo -= parseInt(otroMonto);
            console.log("Se retiran " + parseInt(otroMonto))
            consultarSaldo();
            document.getElementById("textoSaldo2").innerHTML = `Has retirado $${parseInt(otroMonto)} exitosamente.`;
        } else if (isNaN(otroMonto)) {
            alert("Monto inválido. Intente nuevamente.")
        } else {

            alert("Error, saldo insuficiente.")
        }
    }
})

// Botones de montos (Ingresar)
document.getElementById("2boton100").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo + 100 <= 990) {
            cuentaEncontrada.saldo += 100;
            console.log("Se ingresan $100")
            consultarSaldo();
            document.getElementById("textoSaldo3").innerHTML = `Has depositado $100 exitosamente.`;
        } else {
            alert("Monto excede el límite de $990, intente nuevamente.")
        }
    }
})

document.getElementById("2boton200").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo + 200 <= 990) {
            cuentaEncontrada.saldo += 200;
            console.log("Se ingresan $200")
            consultarSaldo();
            document.getElementById("textoSaldo3").innerHTML = `Has depositado $200 exitosamente.`;
        } else {
            alert("Monto excede el límite de $990, intente nuevamente.")
        }
    }
})

document.getElementById("2boton500").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo + 500 <= 990) {
            cuentaEncontrada.saldo += 500;
            console.log("Se ingresan $500")
            consultarSaldo();
            document.getElementById("textoSaldo3").innerHTML = `Has depositado $500 exitosamente.`;
        } else {
            alert("Monto excede el límite de $990, intente nuevamente.")
        }
    }
})

document.getElementById("2boton800").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo + 800 <= 990) {
            cuentaEncontrada.saldo += 800;
            console.log("Se ingresan $800")
            consultarSaldo();
            document.getElementById("textoSaldo3").innerHTML = `Has depositado $800 exitosamente.`;
        } else {
            alert("Monto excede el límite de $990, intente nuevamente.")
        }
    }
})

document.getElementById("2boton900").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);

    if (cuentaEncontrada) {
        if (cuentaEncontrada.saldo + 900 <= 990) {
            cuentaEncontrada.saldo += 900;
            console.log("Se ingresan $900")
            consultarSaldo();
            document.getElementById("textoSaldo3").innerHTML = `Has depositado $900 exitosamente.`;
        } else {
            alert("Monto excede el límite de $990, intente nuevamente.")
        }
    }
})

document.getElementById("2botonotro").addEventListener('click', function () {
    const rutInput = document.getElementById("rut").value;
    const cuentaEncontrada = cuentas.find(c => c.rut === rutInput);
    const otroMonto = prompt('Ingrese el monto a depositar:');

    if (cuentaEncontrada) {
        if (otroMonto && !isNaN(otroMonto) && cuentaEncontrada.saldo - parseInt(otroMonto) <= 990) {
            cuentaEncontrada.saldo += parseInt(otroMonto);
            console.log("Se ingresan " + parseInt(otroMonto))
            consultarSaldo();
            document.getElementById("textoSaldo3").innerHTML = `Has depositado $${parseInt(otroMonto)} exitosamente.`;
        } else if (isNaN(otroMonto)) {
            alert("Monto inválido. Intente nuevamente.")
        } else {

            alert("Monto excede el límite de $990, intente nuevamente.")
        }
    }
})

// Botones de carga
document.getElementById("ingresar").addEventListener("click", ingresarUsuario)
document.getElementById("consultar").addEventListener("click", consultarSaldo)
document.getElementById("consultar2").addEventListener("click", consultarSaldo)
document.getElementById("consultar3").addEventListener("click", consultarSaldo)