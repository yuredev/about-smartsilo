import english from './english.js';
import ptbr from './ptbr.js';

const vueApp = new Vue({
  el: '#app',
  data: {
    idioma: 'english',
    conteudos: {
      sobre: ''
    }
  },
  methods: {
    setConteudo(conteudo) {
      this.conteudos[conteudo] = getConteudo(conteudo, this.idioma); 
    },
    setIdioma(idioma) {
      this.idioma = idioma;
      carregarConteudo(this);
    }
  },
});

function carregarConteudo(vueApp) {
  Object.keys(vueApp.idioma == 'portugues' ? ptbr : english).forEach(chave => {
    vueApp.setConteudo(chave);
  });

  const select = document.getElementById('idioma');

  select.style.backgroundImage = vueApp.idioma == 'portugues' ?
    "url('./img/brazil-flag.svg')" :
    "url('./img/uk-flag.jpg')"

  select.style.backgroundSize = 'contain';
}

const getConteudo = (conteudo, idioma) => (
  idioma == 'portugues' ? ptbr[conteudo] : english[conteudo]
);

export default vueApp;