import {PaisModel} from "./pais-model";

export class DiretorModel{
  id: string;
  nome: string;
  dataNascimento: Date;
  pais: Array<PaisModel>;
}
