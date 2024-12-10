import { Route } from '@angular/router'
import { GridComponent } from './grid/grid.component'
import { SingleComponent } from './single/single.component'
import { CartComponent } from './cart/cart.component'
import { EmptyCartComponent } from './empty-cart/empty-cart.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { ShopComponent } from '../../demos/shop/shop.component'

export const SHOP_ROUTES: Route[] = [
  {
    path: 'grid',
    component: GridComponent,
    data: { title: 'Shop Grid' },
  },
  {
    path: 'single/:id',
    component: SingleComponent,
    data: { title: 'Shop Single' },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Shop Cart' },
  },
  {
    path: 'empty-cart',
    component: EmptyCartComponent,
    data: { title: 'Empty Cart' },
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { title: 'Shop Checkout' },
  },
  {
    path: 'index',
    component: ShopComponent,
    data: { title: 'Shop Index' },
  },
]
