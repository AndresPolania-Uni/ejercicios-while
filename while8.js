let dias = 30; // 15, 30, o 90
let costo;

while (dias === 15 || dias === 30 || dias === 90) {
  if (dias === 15) {
    costo = 18000;
  } else if (dias === 30) {
    costo = 35000;
  } else if (dias === 90) {
    costo = 86000;
  }
  break;
}

console.log(`El costo de la mensualidad para ${dias} días es: $${costo}.`);
