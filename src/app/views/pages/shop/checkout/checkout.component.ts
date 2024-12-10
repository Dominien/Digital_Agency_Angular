import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Component } from '@angular/core'
import { PersonalInfoComponent } from './components/personal-info/personal-info.component'
import { PaymentOptionComponent } from './components/payment-option/payment-option.component'
import { PromoCodeComponent } from './components/promo-code/promo-code.component'
import { DetailComponent } from './components/detail/detail.component'

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    PersonalInfoComponent,
    PaymentOptionComponent,
    PaymentOptionComponent,
    PromoCodeComponent,
    DetailComponent,
  ],
  templateUrl: './checkout.component.html',
  styles: ``,
})
export class CheckoutComponent {}
