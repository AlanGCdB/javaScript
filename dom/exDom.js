// 01° Retorne a url da página atual utilizando o objeto window:
const urlPrincipal = document.querySelector('#urlPrincipal');

const url = window.location.href;

urlPrincipal.addEventListener('click', function(){
    return console.log(url);;
});

// 02° Selecione o promeiro alemento da página que possua a class ativado:
urlPrincipal.classList.add('ativo');
 
const classAtivo = document.querySelector('.ativo');
console.log(classAtivo);

// 03° Retorne a linguagem do navegador
const navegador = window.navigator.language;
console.log(navegador);

// 04° Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);