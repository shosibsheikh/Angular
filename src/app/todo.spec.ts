
import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  [x: string]: any;
  private todos: Todo[] = [
    { id: 1, text: 'Sample todo', done: false }
  ];
  private nextId = 2;

  constructor() { }

  getAll(): Todo[] {
    return this.todos;
  }

  add(text: string) {
    if (!text?.trim()) return;
    this.todos.push({ id: this.nextId++, text: text.trim(), done: false });
  }

  toggle(id: number) {
    const t = this.todos.find(x => x.id === id);
    if (t) t.done = !t.done;
  }

  remove(id: number) {
    this.todos = this.todos.filter(x => x.id !== id);
  }
}
