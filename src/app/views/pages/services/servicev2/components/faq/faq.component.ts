import { Component } from '@angular/core'
import { faqs } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'servicev2-faq',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  faqsList = faqs
}
