import { Component } from '@angular/core'
import { steps } from '../../data'

@Component({
  selector: 'service-single-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styles: ``,
})
export class StepsComponent {
  stepList = steps
}
