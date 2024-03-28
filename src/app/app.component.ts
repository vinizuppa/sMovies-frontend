import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./shared/nav/nav.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {CardFilmeComponent} from "./components/card-filme/card-filme.component";
import {ListFilmesComponent} from "./pages/user-area/list-filmes/list-filmes.component";
import {LoginComponent} from "./pages/commons/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, FooterComponent, CardFilmeComponent, ListFilmesComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smovies';
}
