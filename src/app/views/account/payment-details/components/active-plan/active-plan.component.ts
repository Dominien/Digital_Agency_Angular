import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'active-plan',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './active-plan.component.html',
  styles: ``,
})
export class ActivePlanComponent {
  currency = currency
}
