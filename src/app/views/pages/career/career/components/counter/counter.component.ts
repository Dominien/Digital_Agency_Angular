import { Component } from '@angular/core'
import { counterData } from '../../data'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'career-counter',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './counter.component.html',
  styles: ``,
})
export class CounterComponent {
  counterList = counterData
}
