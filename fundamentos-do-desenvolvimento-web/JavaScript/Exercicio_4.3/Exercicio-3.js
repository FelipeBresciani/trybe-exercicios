let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0]
let maiorPlavra = array[0]

for (let i = 1; i < array.length; i += 1) {
      

    if (menorPalavra.length > array[i].length) {
            menorPalavra = array[i]
    }

    if (maiorPlavra.length < array[i].length) {
            maiorPlavra = array[i]
    }
}
console.log("maior " + maiorPlavra);
console.log("menor " + menorPalavra);





