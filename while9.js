while (true) {
    let angulo1 = parseInt(prompt("Ingrese el primer ángulo del triángulo:"))
    let angulo2 = parseInt(prompt("Ingrese el segundo ángulo del triángulo:"))
    let angulo3 = parseInt(prompt("Ingrese el tercer ángulo del triángulo:"))

    if (angulo1 + angulo2 + angulo3 === 180) {
        alert("El triángulo es válido.")
        break
    } else {
        alert("El triángulo no es válido.")
        break
    }
}
