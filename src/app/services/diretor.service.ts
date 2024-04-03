import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmeDetalhesResponseDto} from "../models/dtos/filmes/filme-detalhes-response-dto";
import {environment} from "../../environment/environment";
import {DiretorResponseDto} from "../models/dtos/diretor/diretor-response-dto";
import {FilmeModel} from "../models/filme-model";

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  constructor(private http: HttpClient) {

  }

  buscarTodosDiretores(): Observable<Array<DiretorResponseDto>> {
    return this.http.get<Array<DiretorResponseDto>>(environment.apiUrl + '/diretor')
  }
}
