// import { Routes } from '@angular/router';
// import { Routes } from '@angular/router';
// import { TodoComponent } from './todo/todo';

// export const routes: Routes = [
//   { path: '', redirectTo: 'todo', pathMatch: 'full' },
//   { path: 'todo', component: TodoComponent }
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo';

export const routes: Routes = [

  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  // future routes: { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
