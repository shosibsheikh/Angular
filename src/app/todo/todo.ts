// // import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }

// @Component({
//   selector: 'app-todo',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   template: `
//     <div class="todo-container">
//       <h2>Todo App</h2>

//       <div class="add">
//         <input [(ngModel)]="newText" placeholder="Add new todo" />
//         <button (click)="add()">Add</button>
//       </div>

//       <ul>
//         <li *ngFor="let t of todos">
//           <input type="checkbox" [checked]="t.done" (change)="toggle(t)" />
//           <span [style.textDecoration]="t.done ? 'line-through' : 'none'">
//             {{ t.text }}
//           </span>
//           <button (click)="remove(t)">x</button>
//         </li>
//       </ul>
//     </div>
//   `,
//   styles: [`
//     .todo-container { max-width:600px; margin:20px auto; padding:10px; border:1px solid #ddd; border-radius:6px; }
//     .add { display:flex; gap:8px; margin-bottom:10px; }
//     .add input { flex:1; padding:6px; }
//     ul { list-style:none; padding:0; }
//     li { display:flex; gap:8px; align-items:center; padding:6px 0; }
//     button { cursor:pointer; }
//   `]
// })
// export class TodoComponent {
//   todos: Todo[] = [];
//   newText = '';
//   nextId = 1;

//   add() {
//     const text = this.newText.trim();
//     if (!text) return;
//     this.todos.push({ id: this.nextId++, text, done: false });
//     this.newText = '';
//   }

//   toggle(t: Todo) {
//     t.done = !t.done;
//   }

//   remove(t: Todo) {
//     this.todos = this.todos.filter(x => x.id !== t.id);
//   }
// }
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { TodoService } from '../todo.spec';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class TodoComponent {

  todos: Todo[] = [];
  newText: string = '';

  constructor(private todoService: TodoService) {
    this.refresh();
  }

  refresh() {
    this.todos = this.todoService.getAll();
  }

  add() {
    this.todoService.add(this.newText);
    this.newText = '';
    this.refresh();
  }

  toggle(t: Todo) {
    this.todoService.toggle(t.id);
    this.refresh();
  }

  remove(t: Todo) {
    this.todoService.remove(t.id);
    this.refresh();
  }
}
export type { Todo };

