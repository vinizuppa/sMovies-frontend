export class FilmeAvaliacaoModel {
  id: string;
  usuarioId: string;
  filmeId: string;
  nota: number;
  avaliacao: string;

  constructor(id: string, usuarioId: string, filmeId: string, nota: number, avaliacao: string) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.filmeId = filmeId;
    this.nota = nota;
    this.avaliacao = avaliacao;
  }
}
