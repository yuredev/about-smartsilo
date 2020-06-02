import instanciaVue from './instanciaVue.js';
import ptbr from './ptbr.js';

setTimeout(() => carregarConteudo(instanciaVue), 100);;

function carregarConteudo(vueApp) {
  Object.keys(ptbr).forEach(chave => {
    vueApp.setConteudo(chave);
  });
}