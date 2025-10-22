import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,About,Gallery,Services,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anguler-app');
  name = 'Shoaib';
  helloMessage() {
    return 'Hello ' + this.name +'=(this is Function)';
  }
}
