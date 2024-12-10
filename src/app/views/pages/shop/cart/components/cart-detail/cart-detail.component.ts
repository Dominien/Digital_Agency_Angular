import { currency } from '@/app/common/constants'
import type { ShoppingState } from '@/app/core/helpers/shop'
import { ShoppingService } from '@/app/core/services/shopping.service'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import type { Observable } from 'rxjs'

@Component({
  selector: 'cart-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-detail.component.html',
  styles: ``,
})
export class CartDetailComponent {
  currency = currency
  state$!: Observable<ShoppingState>
  cartItemsLength$: Observable<number>

  shoppingService = inject(ShoppingService)

  constructor() {
    this.state$ = this.shoppingService.state
    this.cartItemsLength$ = this.shoppingService.cartItemsLength$
  }
}
