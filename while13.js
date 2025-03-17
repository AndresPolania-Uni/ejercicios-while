while (true) {
    let operador = prompt("Seleccione el operador: Claro, Tigo o Movistar:").toLowerCase();
    let minutosInternacionales = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"))

    let cargoFijo, valorMinuto, valorPaqueteDatos

    if (operador === "tigo") {
        cargoFijo = 45000
        valorMinuto = 200
        valorPaqueteDatos = 12000
    } else if (operador === "claro") {
        cargoFijo = 30000
        valorMinuto = 100
        valorPaqueteDatos = 18000
    } else if (operador === "movistar") {
        cargoFijo = 40000
        valorMinuto = 250
        valorPaqueteDatos = 8000
    } else {
        alert("Operador no válido. Intente de nuevo.")
        continue
    }

    let costoMinutos = minutosInternacionales * valorMinuto
    alert(`El costo por los minutos internacionales es: $${costoMinutos}`)
    alert(`El costo del paquete de datos es: $${valorPaqueteDatos}`)
    alert(`El cargo fijo es: $${cargoFijo}`)
    alert(`El total a pagar es: $${cargoFijo + costoMinutos + valorPaqueteDatos}`)
    break
}
