while (true) {
    let tamaño = prompt("Seleccione el tamaño del sándwich: pequeño o grande").toLowerCase()
    let ingredientes = prompt("¿Desea agregar algún ingrediente adicional? (tocineta, jalapeño, pavo, queso)").toLowerCase().split(',')

    let precioBase = tamaño === "grande" ? 12000 : 6000
    let costoTotal = precioBase

    for (let ingrediente of ingredientes) {
        ingrediente = ingrediente.trim()
        if (ingrediente === "tocineta" || ingrediente === "pavo") {
            costoTotal += 3000
        } else if (ingrediente === "queso") {
            costoTotal += 2500
        }
    }

    alert(`El precio final del sándwich es: $${costoTotal}`)
    break
}
