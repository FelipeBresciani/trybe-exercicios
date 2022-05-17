function Palindromo(palavra){
    for(i in palavra){
      if(palavra[index] != palavra[(palavra.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  function Palindromo(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(Palindromo('arara')); 
  console.log(Palindromo('desenvolvimento'));