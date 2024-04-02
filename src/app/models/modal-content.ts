import {TipoBotaoEnum} from "./enums/tipo-botao-enum";
import {TamanhoModalEnum} from "./enums/tamanho-modal-enum";
export class ModalContent {
  tamanhoModal: TamanhoModalEnum;
  tituloModal: string;
  botaoEsquerdaText: string;
  botaoEsquerdaTipo: TipoBotaoEnum;
  botaoDireitaText: string;
  botaoDireitaTipo: TipoBotaoEnum;

  constructor(tamanhoModal: TamanhoModalEnum, tituloModal: string, botaoEsquerdaText: string, botaoEsquerdaTipo: TipoBotaoEnum, botaoDireitaText: string, botaoDireitaTipo: TipoBotaoEnum) {
    this.tamanhoModal = tamanhoModal;
    this.tituloModal = tituloModal;
    this.botaoEsquerdaText = botaoEsquerdaText;
    this.botaoEsquerdaTipo = botaoEsquerdaTipo;
    this.botaoDireitaText = botaoDireitaText;
    this.botaoDireitaTipo = botaoDireitaTipo;
  }
}
