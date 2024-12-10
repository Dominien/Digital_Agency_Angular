import { Component } from '@angular/core'
import { CountUpModule } from 'ngx-countup'
import { statData } from '../../data'

@Component({
  selector: 'about-counter',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './counter.component.html',
  styles: ``,
})
export class CounterComponent {
  statData = statData
}
