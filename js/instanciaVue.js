import english from './english.js';
import ptbr from './ptbr.js';

const vueApp = new Vue({
  el: '#app',
  data: {
    idioma: 'portugues',
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
    }
  },
});

const getConteudo = (conteudo, idioma) => (
  idioma == 'portugues' ? ptbr[conteudo] : english[conteudo]
);

export default vueApp;