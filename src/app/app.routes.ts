import {RouterModule, Routes} from '@angular/router';
import {DetalhesFilmeComponent} from "./pages/user-area/detalhes-filme/detalhes-filme.component";
import {NgModule} from "@angular/core";
import {ListFilmesComponent} from "./pages/user-area/list-filmes/list-filmes.component";
import {LoginComponent} from "./pages/commons/login/login.component";
import {CadastroFilmeComponent} from "./pages/admin-area/cadastro-filme/cadastro-filme.component";


export const routes: Routes = [
  { path: '',
    title: "Listar Filmes",
    component: ListFilmesComponent},

  { path: 'avaliar/:id',
    title: "Avaliar Filme",
    component: DetalhesFilmeComponent},
  { path: 'login',
    title: "Login",
    component: LoginComponent},
  { path: 'cadastro/filme',
    title: "Cadastro de Filme",
    component: CadastroFilmeComponent}
];

