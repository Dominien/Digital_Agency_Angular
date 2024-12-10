import { Component } from '@angular/core'
import { faqData } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'pricing-faq',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  faqList = faqData
}
