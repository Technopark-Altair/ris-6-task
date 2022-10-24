import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'qweweWz`';
  text = 'asda'
  price = 100
  itemAdded = ''
  counter = 0

  addItem(text: string, price: number) {
    this.itemAdded = text + ` ${price} $ ${this.counter}`
    this.counter = this.counter + 1
  }
}
