import { Component } from '@angular/core'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'saas-v2-steps',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './steps.component.html',
  styles: ``,
})
export class StepsComponent {}
