import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilmeListaResponseDto} from "../../models/dtos/filmes/filme-lista-response-dto";
import {NgFor} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {ModalAvaliacoesComponent} from "../modal-avaliacoes/modal-avaliacoes.component";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-card-filme',
  standalone: true,
  imports: [NgFor, RouterLink, ModalAvaliacoesComponent, NgxPaginationModule],
  templateUrl: './card-filme.component.html',
  styleUrl: './card-filme.component.scss'
})
export class CardFilmeComponent implements OnInit {

  @Input() public filme: FilmeListaResponseDto;
  @Output() aoClicarListarAvaliacoes = new EventEmitter<any>();

  protected readonly Math = Math;
  protected readonly Number = Number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  navegarAvaliar(idFilme: string) {
    this.router.navigate(['avaliar', idFilme]);
  }

  exibirModal(idFilme: string) {
    this.aoClicarListarAvaliacoes.emit(idFilme);
  }
}
