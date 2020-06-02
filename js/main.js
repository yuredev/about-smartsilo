import instanciaVue from './instanciaVue.js';
import ptbr from './ptbr.js';

const vueApp = instanciaVue;

setTimeout(() => setConteudo(vueApp), 100);;

function setConteudo(vueApp) {
  Object.keys(ptbr).forEach(chave => {
    vueApp.setConteudo(chave);
  });
}