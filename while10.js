while (true) {
    let copias = parseInt(prompt("Ingrese la cantidad de copias que desea imprimir:"))

    if (copias < 0) {
        alert("La cantidad de copias no puede ser negativa.")
    } else {
        let precio
        if (copias < 500) {
            precio = copias * 120
        } else if (copias < 750) {
            precio = copias * 100
        } else if (copias < 1000) {
            precio = copias * 80
        } else {
            precio = copias * 50
        }

        alert(`El precio por copia es de $${precio / copias}.`)
        alert(`El precio total es de $${precio}.`)
        break;
    }
}
