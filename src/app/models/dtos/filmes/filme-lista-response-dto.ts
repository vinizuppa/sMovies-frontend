import {DiretorModel} from "../../diretor-model";
import {EstrelaDto} from "./estrela-dto";

export class FilmeListaResponseDto {
  id: string;
  nomeCompleto: string;
  urlImagemCapa: string;
  mediaNota: number;
  qtdAvaliacoes: number;
  estrelaDto: EstrelaDto;
}
