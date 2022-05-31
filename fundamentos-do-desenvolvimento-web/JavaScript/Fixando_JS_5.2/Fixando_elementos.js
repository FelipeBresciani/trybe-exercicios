//Acesse o elemento elementoOndeVoceEsta.
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
//Aesse o primeiroFilho a partir de pai.
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
//Agora acesse o terceiroFilho a partir de pai.

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement;
    pai.style.color = 'red';

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    rimeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let textElement = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
