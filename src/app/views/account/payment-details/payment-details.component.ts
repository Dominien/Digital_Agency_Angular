import { Component } from '@angular/core'
import { PageHeadingComponent } from '../components/page-heading/page-heading.component'
import { ActivePlanComponent } from './components/active-plan/active-plan.component'
import { SavePaymentComponent } from './components/save-payment/save-payment.component'
import { TransitionHistoryComponent } from './components/transition-history/transition-history.component'

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [
    PageHeadingComponent,
    ActivePlanComponent,
    SavePaymentComponent,
    TransitionHistoryComponent,
  ],
  templateUrl: './payment-details.component.html',
  styles: ``,
})
export class PaymentDetailsComponent {}
