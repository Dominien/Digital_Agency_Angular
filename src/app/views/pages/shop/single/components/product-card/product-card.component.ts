import { currency } from '@/app/common/constants'
import { getDiscountedPrice } from '@/app/core/helpers/products'
import { ShoppingService } from '@/app/core/services/shopping.service'
import type { ProductType } from '@/app/views/demos/landing-product/types'
import { CommonModule } from '@angular/common'
import { Component, inject, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

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
  currency = currency
  public shoppingService = inject(ShoppingService)

  getDiscountedPrice(
    originalPrice: number,
    discount: number,
    discountType: DiscountType
  ) {
    return getDiscountedPrice(originalPrice, discount, discountType)
  }
}
