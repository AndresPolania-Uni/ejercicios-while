let fisica = 7, quimica = 8, biologia = 6, matematicas = 9, informatica = 8;
let total = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (total / 50) * 100;
let calificacion;

while (total >= 0) {
  if (porcentaje < 60) {
    calificacion = "Mala";
  } else if (porcentaje >= 60 && porcentaje <= 80) {
    calificacion = "Buena";
  } else {
    calificacion = "Excelente";
  }
  break;
}

console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
