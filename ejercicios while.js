let nombre = "Ana López";
let horas = 8;
let salario;

while (horas >= 1) {
  if (horas <= 10) {
    salario = horas * 30000;
  } else {
    salario = horas * 33000;
  }
  break; // Sale del ciclo porque ya se ha calculado el salario
}

console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
