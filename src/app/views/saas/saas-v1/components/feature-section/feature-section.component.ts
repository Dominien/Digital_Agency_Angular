import { Component } from '@angular/core'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { statData } from '../../data'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'saas-v1-feature-section',
  standalone: true,
  imports: [NgbAccordionModule, CountUpModule],
  templateUrl: './feature-section.component.html',
  styles: ``,
})
export class FeatureSectionComponent {
  statData = statData
}
