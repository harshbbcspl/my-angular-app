import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Footer } from './pages/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
