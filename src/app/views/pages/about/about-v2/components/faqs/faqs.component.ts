import { Component } from '@angular/core'
import { faqs } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'aboutV2-faqs',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styles: ``,
})
export class FaqsComponent {
  faqList = faqs
}
