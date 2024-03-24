import {Component, OnInit} from '@angular/core';
import {CardFilmeComponent} from "../../../components/card-filme/card-filme.component";
import {NgForOf} from "@angular/common";
import {Page} from "../../../models/abstracts/page";
import {FilmeService} from "../../../services/filme.service";
import {FiltroDto} from "../../../models/dtos/filtro-dto";
import {FilmeListaResponseDto} from "../../../models/dtos/filmes/filme-lista-response-dto";
import {GlobalConfigurations} from "../../../../environment/environment";
import {NgxPaginationModule, PaginatePipeArgs} from "ngx-pagination";

@Component({
  selector: 'app-list-filmes',
  standalone: true,
  imports: [
    CardFilmeComponent,
    NgForOf,
    NgxPaginationModule
  ],
  templateUrl: './list-filmes.component.html',
  styleUrl: './list-filmes.component.scss'
})
export class ListFilmesComponent implements OnInit {
  configuracaoPaginators: PaginatePipeArgs = {
    itemsPerPage: GlobalConfigurations.quantidadeDeItensPorPagina,
    currentPage: 0,
    totalItems: 0,
    id: 'first'
  };

  public filmes: Page<FilmeListaResponseDto>;

  constructor(public filmeService: FilmeService) {
    this.buscarTodosFilmesPaginados(null);
  }

  ngOnInit(): void {
  }

  aoSelecionarPagina($event: number) {
    this.buscarTodosFilmesPaginados($event);
  }

  buscarTodosFilmesPaginados(event: any) {
    let filtro = new FiltroDto();
    filtro.quantidadePorPagina = GlobalConfigurations.quantidadeDeItensPorPagina;

    if (event == null) {
      filtro.numeroPagina = 0;
    } else {
      filtro.numeroPagina = event - 1;
    }

    this.filmeService.buscarTodosFilmes(filtro).subscribe(response =>{
      this.filmes = response;
      this.configuracaoPaginators.currentPage = event;
      this.configuracaoPaginators.totalItems = this.filmes?.totalElements;
    });
  }
}
