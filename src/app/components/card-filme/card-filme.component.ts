import {Component, Input, OnInit} from '@angular/core';
import {FilmeListaResponseDto} from "../../models/dtos/filmes/filme-lista-response-dto";
import {NgFor} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-card-filme',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './card-filme.component.html',
  styleUrl: './card-filme.component.scss'
})
export class CardFilmeComponent implements OnInit {

  @Input() public filme: FilmeListaResponseDto;
  protected readonly Math = Math;
  protected readonly Number = Number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  navegarAvaliar(idFilme: string) {
    this.router.navigate(['avaliar', idFilme]);
  }
}
