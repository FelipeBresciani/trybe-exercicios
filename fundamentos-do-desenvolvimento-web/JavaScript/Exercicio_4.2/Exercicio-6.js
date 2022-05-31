let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let Impares = 0
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0 ){
    Impares += 1;     
}
}
 
if (Impares === 0) {
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log(Impares);
}