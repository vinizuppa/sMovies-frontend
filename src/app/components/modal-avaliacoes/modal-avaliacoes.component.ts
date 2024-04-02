import {Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FilmeAvaliacaoService} from "../../services/filme-avaliacao.service";
import {ModalContent} from "../../models/modal-content";
import {TamanhoModalEnum} from "../../models/enums/tamanho-modal-enum";
import {TipoBotaoEnum} from "../../models/enums/tipo-botao-enum";
import {NgxPaginationModule, PaginatePipeArgs} from "ngx-pagination";
import {GlobalConfigurations} from "../../../environment/environment";
import {FiltroDto} from "../../models/dtos/filtro-dto";
import {Page} from "../../models/abstracts/page";
import {FilmeAvaliacaoDto} from "../../models/dtos/filme-avaliacao/filme-avaliacao-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CardFilmeComponent} from "../card-filme/card-filme.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-modal-avaliacoes',
  standalone: true,
  imports: [
    NgxPaginationModule,
    NgForOf
  ],
  templateUrl: './modal-avaliacoes.component.html',
  styleUrl: './modal-avaliacoes.component.scss'
})
export class ModalAvaliacoesComponent implements OnInit, OnChanges {
  @Input() filmeId: string;

  activeModal = inject(NgbActiveModal);

  public filmeAvaliacaoDtoPage: Page<FilmeAvaliacaoDto>;

  configuracaoPaginators: PaginatePipeArgs = {
    itemsPerPage: GlobalConfigurations.quantidadeDeItensPorPagina,
    currentPage: 0,
    totalItems: 0,
    id: 'second'
  };

  constructor(public filmeAvaliacaoService: FilmeAvaliacaoService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.buscarTodasAvaliacoesFilmePaginado(null);
    }
  }

  ngOnInit(): void {
    this.buscarTodasAvaliacoesFilmePaginado(null);
  }

  aoSelecionarPagina($event: number) {
    this.buscarTodasAvaliacoesFilmePaginado($event);
  }

  private buscarTodasAvaliacoesFilmePaginado(event: any) {
    let filtro = new FiltroDto();
    filtro.quantidadePorPagina = GlobalConfigurations.quantidadeDeItensPorPagina;

    if (event == null) {
      filtro.numeroPagina = 0;
    } else {
      filtro.numeroPagina = event - 1;
    }

    this.filmeAvaliacaoService.listarAvaliacoesPorFilmeId(this.filmeId, filtro).subscribe(response =>{
      this.filmeAvaliacaoDtoPage = response;
      this.configuracaoPaginators.currentPage = event;
      this.configuracaoPaginators.totalItems = this.filmeAvaliacaoDtoPage?.totalElements;
    });
  }


  protected readonly Number = Number;
}
