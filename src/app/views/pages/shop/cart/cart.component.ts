import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Component } from '@angular/core'
import { CartDetailComponent } from './components/cart-detail/cart-detail.component'
import { CartFaqComponent } from './components/cart-faq/cart-faq.component'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BreadcrumbComponent, CartDetailComponent, CartFaqComponent],
  templateUrl: './cart.component.html',
  styles: ``,
})
export class CartComponent {}
