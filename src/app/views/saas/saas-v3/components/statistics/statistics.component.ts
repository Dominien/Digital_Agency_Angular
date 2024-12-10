import { Component } from '@angular/core'
import { statData } from '../../data'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'saas-v3-statistics',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './statistics.component.html',
  styles: ``,
})
export class StatisticsComponent {
  statData = statData
}
