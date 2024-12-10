import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ShoppingService } from '../core/services/shopping.service'
import { ShoppingState } from '../core/helpers/shop'

@Component({
  selector: 'app-shop-provider',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class ShopProviderComponent implements OnInit {
  state$: Observable<ShoppingState>

  constructor(private shoppingService: ShoppingService) {
    this.state$ = this.shoppingService.state
  }

  ngOnInit(): void {}
}
