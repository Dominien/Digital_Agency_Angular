import { Component } from '@angular/core'
import { statData } from '../../data'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'mobile-show-case-about',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {
  statData = statData
}
