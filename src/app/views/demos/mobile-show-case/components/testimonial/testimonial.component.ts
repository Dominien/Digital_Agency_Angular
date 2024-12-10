import { IsotopeDirective } from '@/app/components/isotope-directive '
import { Component } from '@angular/core'
import { testimonials } from '../../data'
@Component({
  selector: 'mobile-show-case-testimonial',
  standalone: true,
  imports: [IsotopeDirective],
  templateUrl: './testimonial.component.html',
  styles: ``,
})
export class TestimonialComponent {
  testimonialsData = testimonials
}
