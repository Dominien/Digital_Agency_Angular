import { Component } from '@angular/core'
import { faqData } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'help-faqs',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styles: ``,
})
export class FaqsComponent {
  faqList = faqData
}
