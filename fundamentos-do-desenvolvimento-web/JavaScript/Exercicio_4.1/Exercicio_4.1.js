//////////////////////////////////////////////////////////////// EX - 1 ///////////////////////////////////////////////////////////////////////////////////////////////
let a = 123
let b = 321

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//////////////////////////////////////////////////////////////// EX - 2 ///////////////////////////////////////////////////////////////////////////////////////////////
let a2 = 20;
let b2 = 21;

if (a2 > b2) {
  console.log("'a' é maior que 'b'");
} else {
  console.log("'b' é maior que 'a'");
};

//////////////////////////////////////////////////////////////// EX - 3 ///////////////////////////////////////////////////////////////////////////////////////////////

let a3 = 6;
let b3 = 4;
let c3 = 2;

if (a3 > b3 && a3 > c3) {
  console.log('O maior número é: ' + a3 + ' (a)');
} else if (b3 > a3 && b3 > c3) {
  console.log('O maior número é: ' + b3 + ' (b)');
} else {
  console.log('O maior número é: ' + c3 + ' (c)');
};

//////////////////////////////////////////////////////////////// EX - 4 ///////////////////////////////////////////////////////////////////////////////////////////////


let number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

/////////////////////////////////////////////////////////////// EX - 5 ///////////////////////////////////////////////////////////////////////////////////////////////


let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}

/////////////////////////////////////////////////////////////// EX - 6 ///////////////////////////////////////////////////////////////////////////////////////////////

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

/////////////////////////////////////////////////////////////// EX - 7 ///////////////////////////////////////////////////////////////////////////////////////////////

let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

/////////////////////////////////////////////////////////////// EX - 8 ///////////////////////////////////////////////////////////////////////////////////////////////


let a8 = 1;
let b8 = 3;
let c8 = 5;

let isEven = false;

if ((a8 % 2 === 0 || b8 % 2 === 0 || c8 % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

////////////////////////////////////////////////////////////// EX - 9 ///////////////////////////////////////////////////////////////////////////////////////////////


let a9 = 1;
let b9 = 3;
let c9 = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

////////////////////////////////////////////////////////////// EX - 10 ///////////////////////////////////////////////////////////////////////////////////////////////


let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
}

////////////////////////////////////////////////////////////// EX - 11 ///////////////////////////////////////////////////////////////////////////////////////////////


let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));

