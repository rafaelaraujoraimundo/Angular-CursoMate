import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';
import { ShoppingCartService } from './shopping-cart.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
        style({ opacity: 0, transform: 'translateX(0px)', offset: 1 })
      ]))),
      transition('ready => void', animate('300ms 0s ease-in', keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
        style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  rowState = 'ready'
  ngOnInit() {
  }

  itens(): any[] {
    return this.shoppingCartService.itens;
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item)
  }

}
