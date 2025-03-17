let num1 = 5, num2 = 8, num3 = 3;
let mayor;

while (num1 !== undefined && num2 !== undefined && num3 !== undefined) {
  if (num1 > num2 && num1 > num3) {
    mayor = num1;
  } else if (num2 > num1 && num2 > num3) {
    mayor = num2;
  } else {
    mayor = num3;
  }
  break;
}

console.log(`El número mayor es: ${mayor}`);
