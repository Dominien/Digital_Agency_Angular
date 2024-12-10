import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'shop-trending-products',
  standalone: true,
  imports: [NgbRatingModule, RouterModule],
  templateUrl: './trending-products.component.html',
  styles: ``,
})
export class TrendingProductsComponent {
  currency = currency
}
