let numero = 7;
while (numero !== 0) {
  if (numero % 2 === 0) {
    console.log(`${numero} es par.`);
  } else {
    console.log(`${numero} es impar.`);
  }
  break; // Sale del ciclo después de verificar el número
}
