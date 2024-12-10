import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'

@Component({
  selector: 'feature-single-solution',
  standalone: true,
  imports: [],
  templateUrl: './solution.component.html',
  styles: ``,
})
export class SolutionComponent {
  currency = currency
}
