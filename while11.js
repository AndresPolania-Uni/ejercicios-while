while (true) {
    let pitido = prompt("¿La computadora emite un pitido? (sí/no):").toLowerCase()
    let unidadGira = prompt("¿La unidad gira? (sí/no):").toLowerCase()

    if (pitido === "sí" && unidadGira === "sí") {
        alert("Póngase en contacto con el técnico de apoyo.")
    } else if (pitido === "sí" && unidadGira === "no") {
        alert("Verificar contactos de la unidad.")
    } else if (pitido === "no" && unidadGira === "no") {
        alert("Traiga la computadora para repararla en la central.")
    } else if (pitido === "no" && unidadGira === "sí") {
        alert("Compruebe las conexiones de altavoces.")
    } else {
        alert("Respuesta inválida, por favor ingrese 'sí' o 'no' correctamente.")
        continue
    }
    break
}
