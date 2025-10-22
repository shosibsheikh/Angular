import { Component, signal } from '@angular/core';

export interface Item {
  id: number;
  name: string;
  price: number;
  isInStock?: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('item-manager');

   items: Item[] = [
    { id: 1, name: 'Book', price: 30, isInStock: true },
    { id: 2, name: 'Pen', price: 10, isInStock: false },
    { id: 3, name: 'Bag', price: 60, isInStock: true },
    { id: 4, name: 'Shoes', price: 45, isInStock: false },
  ];
item: any;
   toggleStockStatus(item: Item): void {
    item.isInStock = !item.isInStock;
   }
    trackById(index: number, item: Item) {
    return item.id;
  }
}
