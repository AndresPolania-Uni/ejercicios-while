let tipoLavadora = 2; // 1 o 2
let cantidad = 4;
let horas = 5;
let costoHora;
let total;

while (cantidad >= 1) {
  if (tipoLavadora === 1) {
    costoHora = 4000;
  } else if (tipoLavadora === 2) {
    costoHora = 3000;
  }

  total = costoHora * cantidad * horas;

  if (cantidad > 3) {
    total *= 0.97; // Aplicar 3% de descuento
  }

  break; // Sale del ciclo después de calcular el costo
}

console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${total}.`);
