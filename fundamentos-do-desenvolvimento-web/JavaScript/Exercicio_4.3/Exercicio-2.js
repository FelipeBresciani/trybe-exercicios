let palavra = 'Felipe';
let palavraInversa = "";

for (let i = 0; i < palavra.length; i += 1) {
    palavraInversa +=  palavra[palavra.length - 1 - i]
}
console.log(palavraInversa);