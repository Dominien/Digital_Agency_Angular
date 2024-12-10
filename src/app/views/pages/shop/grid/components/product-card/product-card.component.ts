import { currency } from '@/app/common/constants'
import { getDiscountedPrice } from '@/app/core/helpers/products'
import type { ShoppingState } from '@/app/core/helpers/shop'
import { ShoppingService } from '@/app/core/services/shopping.service'
import type { ProductType } from '@/app/views/demos/landing-product/types'
import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import type { Observable } from 'rxjs'

type DiscountType = 'percent' | 'amount'

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, NgbRatingModule, RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  @Input() product!: ProductType
  favouriteProducts: any[] = []
  currency = currency
  state$: Observable<ShoppingState>

  constructor(public shoppingService: ShoppingService) {
    this.state$ = this.shoppingService.state
  }

  getDiscountedPrice(
    originalPrice: number,
    discount: number,
    discountType: DiscountType
  ) {
    return getDiscountedPrice(originalPrice, discount, discountType)
  }
}
