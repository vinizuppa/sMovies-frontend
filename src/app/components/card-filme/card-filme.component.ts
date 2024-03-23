import {Component, Input, OnInit} from '@angular/core';
import {FilmeResponseDto} from "../../models/dtos/filmes/filme-response-dto";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-card-filme',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-filme.component.html',
  styleUrl: './card-filme.component.scss'
})
export class CardFilmeComponent implements OnInit {

  @Input() public filme: FilmeResponseDto;
  protected readonly Math = Math;
  protected readonly Number = Number;

  ngOnInit(): void {

  }
}
