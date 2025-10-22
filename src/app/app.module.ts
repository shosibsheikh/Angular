import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';         // <- needed for ngModel
import { RouterModule, RouterOutlet } from '@angular/router';

import { TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  template: `<h1>Todo App</h1><router-outlet></router-outlet>`,
  imports: [RouterOutlet],
})
export class AppComponent { }

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    TodoComponent
  ],
//   declarations: [
//     AppComponent
//   ],
//   bootstrap: [AppComponent]
})
export class AppModule { }
