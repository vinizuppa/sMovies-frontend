import {DiretorModel} from "../../diretor-model";

export class FilmeDetalhesResponseDto {
  id: string;
  nomeCompleto: string;
  sinopse: string;
  urlImagemCapa: string;
  dataLancamento: Date;
  diretor: Array<DiretorModel>;
}
