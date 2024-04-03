import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmeModel} from "../models/filme-model";
import {Page} from "../models/abstracts/page";
import {environment} from "../../environment/environment";
import {FiltroDto} from "../models/dtos/filtro-dto";
import {FilmeListaResponseDto} from "../models/dtos/filmes/filme-lista-response-dto";
import {FilmeDetalhesResponseDto} from "../models/dtos/filmes/filme-detalhes-response-dto";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) {

  }

  buscarTodosFilmes(filtro: FiltroDto): Observable<Page<FilmeListaResponseDto>> {
    return this.http.post<Page<FilmeListaResponseDto>>(environment.apiUrl + '/filme/filtro', filtro)
  }

  buscarDetalheFilme(id: string): Observable<FilmeDetalhesResponseDto> {
    return this.http.get<FilmeDetalhesResponseDto>(environment.apiUrl + '/filme/' + id)
  }

  salvarFilme(filme: FilmeModel): Observable<any> {
    return this.http.post<Observable<any>>(environment.apiUrl + '/filme', filme)
  }
}
