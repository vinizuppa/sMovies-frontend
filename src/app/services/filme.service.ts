import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmeModel} from "../models/filme-model";
import {Page} from "../models/abstracts/page";
import {environment} from "../../environment/environment";
import {FiltroDto} from "../models/dtos/filtro-dto";
import {FilmeResponseDto} from "../models/dtos/filmes/filme-response-dto";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) {

  }

  buscarTodosFilmes(filtro: FiltroDto): Observable<Page<FilmeResponseDto>> {
    return this.http.post<Page<FilmeResponseDto>>(environment.apiUrl + '/filme/filtro', filtro)
  }
}
