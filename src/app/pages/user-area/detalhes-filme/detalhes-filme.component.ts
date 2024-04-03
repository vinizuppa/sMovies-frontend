import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FilmeService} from "../../../services/filme.service";
import {FilmeDetalhesResponseDto} from "../../../models/dtos/filmes/filme-detalhes-response-dto";
import moment from "moment/moment";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DiretorModel} from "../../../models/diretor-model";
import {FilmeAvaliacaoModel} from "../../../models/dtos/filme-avaliacao-model";
import {FilmeAvaliacaoService} from "../../../services/filme-avaliacao.service";
import {response} from "express";

@Component({
  selector: 'app-detalhes-filme',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './detalhes-filme.component.html',
  styleUrl: './detalhes-filme.component.scss'
})
export class DetalhesFilmeComponent implements OnInit {
  public filmeId: string;
  public filmeDetalhes: FilmeDetalhesResponseDto;
  public formAvaliacao!: FormGroup;
  public nomesDiretores: string = '';
  constructor(private routeActivate: ActivatedRoute,
              private router: Router,
              private filmeService: FilmeService,
              private filmeAvaliacaoService: FilmeAvaliacaoService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.filmeId = this.routeActivate.snapshot.paramMap.get('id');
    this.filmeService.buscarDetalheFilme(this.filmeId).subscribe(response =>{
      this.filmeDetalhes = response;
      this.montarNomesDiretores(response.diretor)
    });

    this.inicializarForm();
  }

  public inicializarForm(): void {
    this.formAvaliacao = this.fb.group( {
      email: ['', [Validators.required]],
      nota: ['', [Validators.required]],
      avaliacao: ['']
    });
  }

  public montarNomesDiretores(diretores: Array<DiretorModel>): void {
    diretores.forEach(diretor =>{
      this.nomesDiretores = this.nomesDiretores.concat(diretor?.nome);
    });
  }

  public formatarData(data: string): string {
    return moment(data).format("DD/MM/yyy");
  }

  public limitarNota(): void {
    let valorForm = this.formAvaliacao.get('nota').value;
    if (valorForm > 5) {
      this.formAvaliacao.get('nota').setValue(5);
    }
  }

  public isFormValido(): boolean {
    if (this.formAvaliacao.valid) {
      return true;
    }

    return false;
  }

  public salvarAvaliacao(): void {
    let nota = this.formAvaliacao.get('nota').value;
    let avaliacao = this.formAvaliacao.get('avaliacao').value;
    let filmeAvaliacao = new FilmeAvaliacaoModel(null, null, this.filmeId, nota, avaliacao);

    this.filmeAvaliacaoService.cadastrarFilmeAvaliacao(filmeAvaliacao).subscribe(response =>{
      this.router.navigate(['']);
    });
  }
}
