import { Component } from '@angular/core'
import { steps } from '../../data'

@Component({
  selector: 'digital-agency-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styles: ``,
})
export class StepsComponent {
  stepsData = steps
}
