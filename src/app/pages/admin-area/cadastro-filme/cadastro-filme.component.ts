import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DiretorResponseDto} from "../../../models/dtos/diretor/diretor-response-dto";
import {DiretorService} from "../../../services/diretor.service";
import {response} from "express";
import {FilmeService} from "../../../services/filme.service";
import {FilmeModel} from "../../../models/filme-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro-filme',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './cadastro-filme.component.html',
  styleUrl: './cadastro-filme.component.scss'
})
export class CadastroFilmeComponent implements OnInit {
  public formCadFilme!: FormGroup;
  public diretores: Array<DiretorResponseDto>;
  constructor(private fb: FormBuilder,
              private diretorService: DiretorService,
              private filmeService: FilmeService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.inicializarForm();
    this.buscarDiretores();
  }

  public inicializarForm(): void {
    this.formCadFilme = this.fb.group( {
      nome: ['', [Validators.required]],
      sinopse: ['', [Validators.required]],
      diretor: [null, [Validators.required]],
      urlImagem: ['', [Validators.required]],
      dataLancamento: ['', [Validators.required]]
    });
  }

  public buscarDiretores() {
    this.diretorService.buscarTodosDiretores().subscribe(response =>{
      this.diretores = response;
    });
  }

  public salvarFilme() {
    let filme: FilmeModel = new FilmeModel();
    filme.nomeCompleto = this.formCadFilme.get('nome').value;
    filme.sinopse = this.formCadFilme.get('sinopse').value;
    filme.diretorId = this.formCadFilme.get('diretor').value;
    filme.urlImagemCapa = this.formCadFilme.get('urlImagem').value;
    filme.dataLancamento = this.formCadFilme.get('dataLancamento').value;

    this.filmeService.salvarFilme(filme).subscribe(response =>{
      this.router.navigate(['']);
    });
  }

}
