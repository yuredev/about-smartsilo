import instanciaVue from './instanciaVue.js';
import ptbr from './ptbr.js';


const idiomaSelecionado = localStorage.getItem('idioma');

carregarConteudo(instanciaVue);

const select = document.getElementById('idioma');

select.style.backgroundImage = idiomaSelecionado == 'portugues' ?
  "url('../img/brazil-flag.svg')" :
  "url('../img/uk-flag.jpg')"

select.style.backgroundSize = 'contain';


function carregarConteudo(vueApp) {
  Object.keys(ptbr).forEach(chave => {
    vueApp.setConteudo(chave, idiomaSelecionado);
  });
}