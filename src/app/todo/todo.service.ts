import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = signal([
    { id: 1, text: 'Learn Angular', done: false },
    { id: 2, text: 'Build Todo App', done: true }
  ]);

  addTodo(text: string) {
    const list = this.todos();
    this.todos.set([...list, { id: Date.now(), text, done: false }]);
  }

  toggleTodo(id: number) {
    this.todos.update(list =>
      list.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  clearCompleted() {
    this.todos.update(list => list.filter(todo => !todo.done));
  }
}
