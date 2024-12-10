import { Component } from '@angular/core'
import { features2 } from '../../data'

@Component({
  selector: 'landing-product-testimonial-card',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styles: ``,
})
export class TestimonialCardComponent {
  testimonialData = features2
}
