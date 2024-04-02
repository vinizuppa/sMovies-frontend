import {EstrelaDto} from "../filmes/estrela-dto";

export class FilmeAvaliacaoDto {
  nomeAvaliador: string;
  nota: number;
  estrelaDto: EstrelaDto;
  avaliacao: string;
}
