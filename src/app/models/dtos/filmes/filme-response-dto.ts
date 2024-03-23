import {DiretorModel} from "../../diretor-model";
import {EstrelaDto} from "./estrela-dto";

export class FilmeResponseDto {
  id: string;
  nomeCompleto: string;
  sinopse: string;
  urlImagemCapa: string;
  dataLancamento: Date;
  diretor: Array<DiretorModel>;
  mediaNota: number;
  qtdAvaliacoes: number;
  estrelaDto: EstrelaDto;
}
