// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('todo-upgrade');
// }

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, RouterModule],
//   template: `
//     <nav style="padding: 10px; background-color: #f5f5f5;">
//       <a routerLink="/todo">Todo</a>
//     </nav>
//     <router-outlet></router-outlet>
//   `
// })
// export class AppComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',  // ya inline template: template: `<router-outlet></router-outlet>`
  styleUrls: ['./app.css'],
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'todo-upgrade';
}

