import { Component } from '@angular/core'
import { caseStudies } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'seo-case-studies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-studies.component.html',
  styles: ``,
})
export class CaseStudiesComponent {
  caseStudiesData = caseStudies
}
