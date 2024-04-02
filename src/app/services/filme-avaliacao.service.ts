import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FilmeAvaliacaoModel} from "../models/dtos/filme-avaliacao-model";
import {Page} from "../models/abstracts/page";
import {FilmeListaResponseDto} from "../models/dtos/filmes/filme-lista-response-dto";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";
import {FilmeDetalhesResponseDto} from "../models/dtos/filmes/filme-detalhes-response-dto";
import {FiltroDto} from "../models/dtos/filtro-dto";
import {FilmeAvaliacaoDto} from "../models/dtos/filme-avaliacao/filme-avaliacao-dto";

@Injectable({
  providedIn: 'root'
})
export class FilmeAvaliacaoService {

  constructor(private http: HttpClient) {
  }

  cadastrarFilmeAvaliacao(filmeAvaliacao: FilmeAvaliacaoModel): Observable<any> {
    return this.http.post<Observable<any>>(environment.apiUrl + '/filme-avaliacao', filmeAvaliacao);
  }

  listarAvaliacoesPorFilmeId(filmeId: string, filtro: FiltroDto): Observable<Page<FilmeAvaliacaoDto>> {
    return this.http.post<Page<FilmeAvaliacaoDto>>(environment.apiUrl + '/filme-avaliacao/filtro/' + filmeId, filtro);
  }
}
