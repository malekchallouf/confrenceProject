import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Home } from './core/home/home';
import { Footer } from './core/footer/footer';
import { Conferencelist } from './core/conferencelist/conferencelist';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Conferencelist, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ConfrenceProject');
}